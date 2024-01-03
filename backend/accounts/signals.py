from django.contrib.auth.signals import user_logged_in
from django.core.mail import send_mail
from django.dispatch import receiver
from django.db.models.signals import post_save
from handbooks.models import Client, ServiceCompany


@receiver(user_logged_in)
def send_user(sender, user, request, **kwargs):
    print(user, request)


@receiver(post_save, sender=Client)
def user_created(instance, created, **kwargs):
    if not created:
        return

    if instance.user.email:
        email = instance.user.email
        send_mail(
            subject='Поздравляем, для вас зарегистрирован аккаунт',
            message=f'{instance.name}, для вас зарегистрирован аккаунт.'
                    f' В целях безопасности данные для входа не могут быть высланы по почте,'
                    f' свяжитесь с нами по телефону',
            from_email=None,  # будет использовано значение DEFAULT_FROM_EMAIL
            recipient_list=[email],
        )
    else:
        print(f'у пользователя {instance} нет email')


@receiver(post_save, sender=ServiceCompany)
def user_created(instance, created, **kwargs):
    if not created:
        return

    if instance.user.email:
        email = instance.user.email
        send_mail(
            subject='Поздравляем, для вас зарегистрирован аккаунт',
            message=f'{instance.name}, для вас зарегистрирован аккаунт.'
                    f' В целях безопасности данные для входа не могут быть высланы по почте,'
                    f' свяжитесь с нами по телефону',
            from_email=None,  # будет использовано значение DEFAULT_FROM_EMAIL
            recipient_list=[email],
        )
    else:
        print(f'у пользователя {instance} нет email')

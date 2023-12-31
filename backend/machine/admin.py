from django.contrib import admin
from .models import Machine
from import_export.admin import ImportExportModelAdmin
from import_export import resources
from import_export import fields
from import_export.widgets import ForeignKeyWidget


class MachineResource(resources.ModelResource):
    class Meta:
        model = Machine


class MachineAdmin(ImportExportModelAdmin):
    resource_classes = [MachineResource]


admin.site.register(Machine, MachineAdmin)
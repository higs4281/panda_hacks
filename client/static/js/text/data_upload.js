PANDA.text.DataUpload = function() {
    return {
        add_data: gettext("Add data to %(dataset)s"),
        upload_new_data: gettext("Upload new data"),
        upload_space_critical: gettext("Your PANDA has %(space)s available for files. You should contact your PANDA administrator about expanding the available storage space. <strong>Uploads may fail.</strong>"),
        upload_space_warning: gettext("Your PANDA has %(space)s available for files. You should contact your PANDA administrator about expanding the available storage space."),
        index_space_critical: gettext("Your PANDA has %(space)s available for search indices. You should contact your PANDA administrator about expanding the available storage space. <strong>Uploads may fail.</strong>"),
        index_space_warning: gettext("Your PANDA has %(space)s available for search indices. You should contact your PANDA administrator about expanding the available storage space."),
        adding_data_warning: gettext("<strong>Note:</strong> When adding data to an existing dataset the file you upload must have <strong>exactly</strong> the same headers as the existing data."),
        select_your_file: gettext("Select your file"),
        file_types: gettext("Start by selecting a <strong>CSV (.csv)</strong> or <strong>Excel (.xls or .xlsx)</strong> file from your computer:"),
        excel_styles_warning: gettext('<strong>Excel styles will be lost!</strong> When making this file searchable all formatting applied to the cells will be lost. This means your data may appear differently in PANDA than it does in your spreadsheet application. In addition, only the first worksheet of your file will be made searchable. Read more in our documentation on <a href="http://pandaproject.net/docs/handling-unsupported-excel-features.html">handling unsupported Excel features</a>.'),
        access_files_error: gettext('Access files can not be uploaded to PANDA. Read our documentation on <a href="http://pandaproject.net/docs/importing-access-files.html">importing Access files</a>'),
        dbf_files_error: gettext('DBF files can not be uploaded to PANDA. Read our documentation on <a href="http://pandaproject.net/docs/importing-dbf-files.html">importing DBF files</a>.'),
        unknown_files_error: gettext("Unknown file type. Please upload either an CSV or Excel file."),
        advanced_csv_options: gettext("Advanced CSV options"),
        character_encodings: gettext("Character encodings"),
        character_encodings_help: gettext("<p>Unfortunantely, it is not possible for PANDA to automatically determine the encoding of a CSV file. The default is <strong>utf-8</strong>, which is correct for a large number of files, but there are many possible encodings. Census data, for example, is frequently distributed in the <strong>latin-1</strong> encoding.</p><p>&nbsp;</p><p>Encodings are a complex topic. If PANDA can not import your CSV file you may need to research what encoding it is in.</p>"),
        begin_upload: gettext("Begin upload"),
        wait_for_upload: gettext("Wait while your file is uploaded"),
        describe_your_dataset: gettext("Describe your dataset"),
        while_youre_waiting: gettext("Your file is currently being uploaded to PANDA. While you wait please take a moment to provide some information about it, such as when and how it was acquired."),
        dataset_name: gettext("Name"),
        dataset_description: gettext("Description"),
        dataset_categories: gettext("Categories"),
        uploading: gettext("Upload in progress, please wait..."),
        continue_to_preview: gettext("Continue"),
        preview_your_data: gettext("Preview your data"),
        please_review: gettext("Your file has finished uploading. Please review the following sample data that was extracted from your file and verify it looks correct. If it not correct you may need to modify the file or save your data in another format. If you are satisifed with the preview then click Continue."),
        finish: gettext("Finish"),
        start_over: gettext("Start over"),
        error_title: gettext("Error processing dataset"),
        error_close: gettext("Close"),
        dataset_upload_error: gettext("Error uploading dataset: %(message)s")
    }
}

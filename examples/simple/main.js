var VueFormGenerator = window.VueFormGenerator;

var vm = new Vue({
	el: "#app",
	components: {
		"vue-form-generator": VueFormGenerator.component
	},

	methods: {
		prettyJSON: function(json) {
			if (json) {
				json = JSON.stringify(json, undefined, 4);
				json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
					var cls = "number";
					if (/^"/.test(match)) {
						if (/:$/.test(match)) {
							cls = "key";
						} else {
							cls = "string";
						}
					} else if (/true|false/.test(match)) {
						cls = "boolean";
					} else if (/null/.test(match)) {
						cls = "null";
					}
					return "<span class=\"" + cls + "\">" + match + "</span>";
				});
			}
		}
	},

	data: {
		model: '{ "category": "-1", "subcategory": "-1", "name": "","image":""}',
		schema: '{' +
					'"fields": [' +
						'{' +
							'"type":"select", ' +
							'"label": "Категория", ' +
							'"model": "category", ' +
							'"placeholder": "Выбирите категорию", ' +
							'"required": true, ' +
							'"values": ["Бытовая техника", "Мебель", "Антиквариат"], ' +
							'"selectOptions" : { "noneSelectedText" :  "Выберите категорию", "noneSelectedVal" : "-1" }' +
						'}, ' +
						'{' +
							'"type": "select", ' +
							'"label": "Подкатегория", ' +
							'"model": "subcategory", ' +
							'"disabled": [{ "target": "category", "condition": "anyex", "value": "-1" }], ' +
							'"required": true, ' +
							'"values": ["Планшет", "Телефон", "Часы"],' +
        					'"selectOptions" : { "noneSelectedText" :  "Выберите подкатегорию", "noneSelectedVal" : "-1" }' +
						'}, ' +
						'{' +
							'"type": "input", ' +
							'"inputType": "text", ' +
							'"label": "Название", ' +
							'"model": "name", ' +
							'"required": true, ' +
							'"placeholder": "Введите название аукциона",' +
							'"disabled": [{ "target": "subcategory", "condition": "anyex", "value": "-1" }]' +
						'},' +
        				'{' +
        					'"type": "input", ' +
        					'"inputType": "text", ' +
        					'"label": "Цена", ' +
        					'"model": "price", ' +
        					'"required": true, ' +
        					'"placeholder": "Цена",' +
        					'"disabled": [{ "target": "subcategory", "condition": "anyex", "value": "-1" }]' +
        				'},' +
        				'{' +
        					'"type": "textArea", ' +
        					'"label": "Описание", ' +
        					'"model": "description", ' +
        					'"required": true, ' +
        					'"placeholder": "Введите описание",' +
							'"hint": "Максимум 500 символов",' +
							'"max": 500,' +
							'"rows": 4,' +
							'"validator": "string",' +
        					'"disabled": [{ "target": "subcategory", "condition": "anyex", "value": "-1" }]' +
        				'},' +
        				'{' +
        					'"type": "image", ' +
        					'"label": "Каринки", ' +
        					'"model": "images", ' +
        					'"required": true, ' +
        					'"disabled": [{ "target": "subcategory", "condition": "anyex", "value": "-1" }]' +
        				'}' +
					']' +
				'}',
		formOptions: {
			validateAfterLoad: true,
			validateAfterChanged: true
		}
	},
	created: function () {
		// Parse model
		this.model = JSON.parse(this.model);
		// Parse field schema
        this.schema = JSON.parse(this.schema);

        if(this.schema.fields) {
            for (var prop in this.schema.fields) {
                if(this.schema.fields[prop].hasOwnProperty("validator")) {
                    this.schema.fields[prop].validator = VueFormGenerator.validators[this.schema.fields[prop].validator];
                }
            }
		}
    }
});
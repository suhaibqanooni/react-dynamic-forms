export const formConfig = {
    fields: [
        {
            type: "text",
            label: "Name",
            name: "name",
            required: true
        },
        {
            type: "checkbox",
            label: "Subscribe to Newsletter",
            name: "newsletter",
            defaultValue: false
        },
        {
            type: "select",
            label: "Country",
            name: "country",
            options: [
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" }
            ]
        },

    ]
};

export const expectedInputTypes = [
    "text", "email", "password", "file", "image", "number", "checkbox", "radio", "range", "search", "reset", "time", "date"
]
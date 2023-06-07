export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "Skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "gitLink",
      title: "Git Link",
      type: "url",
    },
    {
      name: "demoLink",
      title: "Demo Link",
      type: "url",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: false,
    },
  ],
};

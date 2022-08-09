export default {
    title: "Button",
    component: Button,
    parameters: {
        zeplinLink: "https://app.zeplin.io/project/5e7a6d478204d59183a1c76b/styleguide/components?coid=5eac833c5f1f2f1cb19f4f19",
    },
};

export const Default = () => <Button>Click me</Button>;
export const Secondary = () => <Button secondary>Click me</Button>;

Default.story = {
    name: "Primary Button",
};

Secondary.story = {
    name: "Secondary Button",
};
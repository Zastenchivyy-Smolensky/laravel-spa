import { render, screen } from "@testing-library/react";
describe("PostForm", () => {
    test("表示させる機能", () => {
        render(<PostForm props={props} />);
        screen.debug();
    });
});

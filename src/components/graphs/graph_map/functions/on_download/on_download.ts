import { getNodesBounds, getViewportForBounds, Node } from "@xyflow/react";
import { toPng } from "html-to-image";


/**
 * On download click perform png
 * creation of given graph representation on 
 * viewport
 * @param nodes nodes for saving to png file
 * @returns saves file to user's device
 */
export default function onDownload(nodes: Node[]) {
    const imageWidth = 768;
    const imageHeight = 400;

    const nodesBounds = getNodesBounds(nodes);
    const viewport = getViewportForBounds(
        nodesBounds,
        imageWidth,
        imageHeight,
        0, 1.5,
        0.25,
    );

    const element: HTMLElement | null = document.querySelector('.react-flow__viewport');
    if (!element) {
        return
    }

    toPng(element, {
        backgroundColor: '#ffffff',
        width: imageWidth,
        height: imageHeight,
        style: {
            width: String(imageWidth),
            height: String(imageHeight),
            transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        },
    })
        .then((dataUrl: string) => {
            const link = document.createElement('a');
            link.download = `graph${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        })
        .catch((err: Error) => {
            console.log('Error downloading image', err);
        });
}
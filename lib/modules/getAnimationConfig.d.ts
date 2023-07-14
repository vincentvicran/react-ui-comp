export type AnimationType = "fade" | "expand" | "elastic";
export declare const getAnimationConfig: (animationType: AnimationType) => {
    duration: number;
    mass?: undefined;
    friction?: undefined;
    tension?: undefined;
} | {
    mass: number;
    friction: number;
    tension: number;
    duration?: undefined;
};
//# sourceMappingURL=getAnimationConfig.d.ts.map
import { FC, PropsWithChildren } from 'react';

export const composeComponents = <T extends object>(
    Component: FC<T>,
    ...otherComponents: FC<PropsWithChildren>[]
): FC<T> => {
    const Providers = otherComponents.reduceRight(
        (Prev, Curr) =>
            ({ children }) => (
                <Prev>
                    <Curr>{children}</Curr>
                </Prev>
            ),
    );

    return (props) => (
        <Providers>
            <Component {...props} />
        </Providers>
    );
};

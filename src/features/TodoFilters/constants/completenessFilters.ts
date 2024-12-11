export enum CompletenessFilter {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}

export const completenessFilters = [
    {
        label: 'All',
        value: CompletenessFilter.ALL,
    },
    {
        label: 'Active',
        value: CompletenessFilter.ACTIVE,
    },
    {
        label: 'Completed',
        value: CompletenessFilter.COMPLETED,
    },
];

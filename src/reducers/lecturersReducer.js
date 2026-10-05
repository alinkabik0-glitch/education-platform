// Начальное состояние
const initialState = {
  lecturers: [],
  filteredLecturers: [],
  filters: {
    sortBy: 'name', // 'name', 'experience', 'price'
    minExperience: 0,
    maxPrice: Infinity,
  },
};

// Экшены
export const ACTIONS = {
  SET_LECTURERS: 'SET_LECTURERS',
  SORT_BY_NAME: 'SORT_BY_NAME',
  SORT_BY_EXPERIENCE: 'SORT_BY_EXPERIENCE',
  SORT_BY_PRICE: 'SORT_BY_PRICE',
  FILTER_BY_EXPERIENCE: 'FILTER_BY_EXPERIENCE',
  FILTER_BY_PRICE: 'FILTER_BY_PRICE',
  RESET: 'RESET',
};

// Helper для извлечения цены из строки "2500 ₽"
const extractPrice = (tariff) => {
  const match = tariff.match(/(\d+)\s*₽/);
  return match ? parseInt(match[1]) : 0;
};

// Helper для извлечения стажа из строки "12 лет"
const extractExperience = (experience) => {
  const match = experience.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

export function lecturersReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LECTURERS:
      return {
        ...state,
        lecturers: action.payload,
        filteredLecturers: action.payload,
      };

    case ACTIONS.SORT_BY_NAME:
      return {
        ...state,
        filters: { ...state.filters, sortBy: 'name' },
        filteredLecturers: [...state.filteredLecturers].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };

    case ACTIONS.SORT_BY_EXPERIENCE:
      return {
        ...state,
        filters: { ...state.filters, sortBy: 'experience' },
        filteredLecturers: [...state.filteredLecturers].sort((a, b) =>
          extractExperience(b.experience) - extractExperience(a.experience)
        ),
      };

    case ACTIONS.SORT_BY_PRICE:
      return {
        ...state,
        filters: { ...state.filters, sortBy: 'price' },
        filteredLecturers: [...state.filteredLecturers].sort((a, b) => {
          const priceA = extractPrice(a.tariffs[0]);
          const priceB = extractPrice(b.tariffs[0]);
          return priceA - priceB;
        }),
      };

    case ACTIONS.FILTER_BY_EXPERIENCE:
      const minExp = action.payload;
      return {
        ...state,
        filters: { ...state.filters, minExperience: minExp },
        filteredLecturers: state.lecturers.filter(
          (lecturer) => extractExperience(lecturer.experience) >= minExp
        ),
      };

    case ACTIONS.FILTER_BY_PRICE:
      const maxPrice = action.payload;
      return {
        ...state,
        filters: { ...state.filters, maxPrice },
        filteredLecturers: state.lecturers.filter((lecturer) => {
          const firstTariffPrice = extractPrice(lecturer.tariffs[0]);
          return firstTariffPrice <= maxPrice;
        }),
      };

    case ACTIONS.RESET:
      return {
        ...state,
        filters: initialState.filters,
        filteredLecturers: state.lecturers,
      };

    default:
      return state;
  }
}
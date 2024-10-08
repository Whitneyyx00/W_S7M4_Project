import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import texts from '../i18n/index.json';
import { getEntriesByKeyPrefix } from '@testing-library/jest-dom';

function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key, value]) =>
    key.startsWith(`${keyPrefix}_`)
  );
}

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1

      One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(texts.en.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    });

    test('TEXT_FAV_LANG_JS is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_FAV_LANG_JS)).toBeVisible();
    });

    test('TEXT_FAV_LANG_RUST is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_FAV_LANG_RUST)).toBeVisible();
    });

    test('TEXT_OPT_FAV_FOOD_1 is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_OPT_FAV_FOOD_1)).toBeVisible();
    });

    test('TEXT_OPT_FAV_FOOD_2 is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_OPT_FAV_FOOD_2)).toBeVisible();
    });

    test('TEXT_OPT_FAV_FOOD_3 is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_OPT_FAV_FOOD_3)).toBeVisible();
    });

    test('TEXT_OPT_FAV_FOOD_4 is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_OPT_FAV_FOOD_4)).toBeVisible();
    });

    test('TEXT_SUBMIT button is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_SUBMIT)).toBeVisible();
    });

    test('TEXT_FAV_LANG label is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByText(texts.en.TEXT_FAV_LANG)).toBeVisible();
    });

    test('LABEL_USERNAME is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByLabelText(texts.en.LABEL_USERNAME)).toBeVisible();
    });

    test('LABEL_FAV_FOOD is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByLabelText(texts.en.LABEL_FAV_FOOD)).toBeVisible();
    });

    test('LABEL_ACCEPT_TERMS is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByLabelText(texts.en.LABEL_ACCEPT_TERMS)).toBeVisible();
    });

    test('PLACEHOLDER_USERNAME is visible', () => {
      render(<App lang="en" />);
      expect(screen.getByPlaceholderText(texts.en.PLACEHOLDER_USERNAME)).toBeVisible();
    });
  });

  describe('Spanish Language', () => {
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
      test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
        render(<App lang="esp" />)
        expect(screen.getByText(texts.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
      });
  
      test('TEXT_FAV_LANG_JS is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_FAV_LANG_JS)).toBeVisible();
      });
  
      test('TEXT_FAV_LANG_RUST is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_FAV_LANG_RUST)).toBeVisible();
      });
  
      test('TEXT_OPT_FAV_FOOD_1 is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_OPT_FAV_FOOD_1)).toBeVisible();
      });
  
      test('TEXT_OPT_FAV_FOOD_2 is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_OPT_FAV_FOOD_2)).toBeVisible();
      });
  
      test('TEXT_OPT_FAV_FOOD_3 is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_OPT_FAV_FOOD_3)).toBeVisible();
      });
  
      test('TEXT_OPT_FAV_FOOD_4 is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_OPT_FAV_FOOD_4)).toBeVisible();
      });
  
      test('TEXT_SUBMIT button is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_SUBMIT)).toBeVisible();
      });
  
      test('TEXT_FAV_LANG label is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByText(texts.esp.TEXT_FAV_LANG)).toBeVisible();
      });
  
      test('LABEL_USERNAME is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByLabelText(texts.esp.LABEL_USERNAME)).toBeVisible();
      });
  
      test('LABEL_FAV_FOOD is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByLabelText(texts.esp.LABEL_FAV_FOOD)).toBeVisible();
      });
  
      test('LABEL_ACCEPT_TERMS is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByLabelText(texts.esp.LABEL_ACCEPT_TERMS)).toBeVisible();
      });
  
      test('PLACEHOLDER_USERNAME is visible', () => {
        render(<App lang="esp" />);
        expect(screen.getByPlaceholderText(texts.esp.PLACEHOLDER_USERNAME)).toBeVisible();
      });
  });
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data for keyPrefix "abc"', () => {
    /*
      👉 TASK 4 part 2

      Implement the function `getEntriesByKeyPrefix` below
      and then come back here and write a few tests
      to ensure it works as expected.

      Although it should be noted that commonly,
      the tests are written _before_ implementing
      the function being tested.
    */
   const obj = {
    'abc_1': 'data_abc_1',
    'abc_2': 'data_abc_2',
    'xyz_1': 'data_xyz_1',
    'abc_3': 'data_abc_3',
   };

const result = getEntriesByKeyPrefix(obj, 'abc');
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
 expect(result).toEqual([
  ['abc_1', 'data_abc_1'],
  ['abc_2', 'data_abc_2'],
  ['abc_3', 'data_abc_3'],
 ]);
});

test('returns empty array for non-matching keyPrefix', () => {
  const obj = {
    'abc_1': 'data_abc_1',
    'abc_2': 'data_abc_2',
    'xyz_1': 'data_xyz_1',
    'abc_3': 'data_abc_3',
  };
  const result = getEntriesByKeyPrefix(obj, 'foo');
  expect(result).toEqual([]);
});

test('can handle an empty object', () => {
  const obj = {};
  const result = getEntriesByKeyPrefix(obj, 'abc');
  expect(result).toEqual([]);
});
});
});


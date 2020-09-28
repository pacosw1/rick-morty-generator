import React, { useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";

import { GET_CHARACTER } from "./graphql/queries";
import {
  FlexContainer,
  Empty,
  GenerateButton,
  SpinDiv,
  Wrapper,
} from "./elements";

import { SpinnerIcon } from "../spinner/Spinner";
import { History, HistoryItem } from "../history/index";
import { CharacterDisplay } from "../character/index";

export const Generator = ({ characterCount }) => {
  let [history, setHistory] = useState([]);
  let [cache, setCache] = useState({});
  let [character, setCharacter] = useState(null);

  let [getCharacter, { loading, error, data }] = useLazyQuery(GET_CHARACTER);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //save query result to local state
  useEffect(() => {
    if (!loading && data) {
      let { character } = data;

      //update character
      setCharacter(character);

      //add result to history
      setHistory((prev) => {
        let copy = [...prev];
        copy.unshift(character);
        return copy;
      });

      //cache not necessary since graphql caches queries automatically
      //add character to cache
      setCache((prev) => {
        let copy = { ...prev };
        copy[character.id] = character;
        return copy;
      });
    }
  }, [data, loading]);

  if (error) return <h1>Error Connecting to Server</h1>;

  //generate ID from max num
  const generateID = (totalCharacters) => {
    let id = Math.floor(Math.random() * totalCharacters + 1);
    return id;
  };

  //execute lazy query on click
  const fetchCharacter = () => {
    console.log(characterCount);
    let id = generateID(characterCount);

    //don't update if previously generated
    if (cache[id]) {
      setCharacter(cache[id]);
      scrollTop();
      return;
    }

    //else execute lazy query
    getCharacter({ variables: { id } });
  };

  //select character from history item
  const selectCharacter = (id) => {
    setCharacter(cache[id]);
    scrollTop();
  };

  //render History Items
  const historyItems = history.map(({ id, image, name }, index) => {
    return (
      <HistoryItem
        key={id}
        id={id}
        active={id == character.id}
        image={image}
        name={name}
        selectCharacter={selectCharacter}
      />
    );
  });

  return (
    <Wrapper>
      <FlexContainer>
        {character ? (
          <CharacterDisplay
            name={character.name}
            img={character.image}
            id={character.id}
            location={character.location.name}
            species={character.species}
            status={character.status}
            origin={character.origin.name}
            gender={character.gender}
            type={character.type}
          />
        ) : (
          <Empty>Click Generate to load a character</Empty>
        )}

        <SpinDiv>
          <GenerateButton
            disabled={loading ? true : false}
            onClick={() => fetchCharacter()}
          >
            {loading ? <SpinnerIcon /> : "GENERATE"}
          </GenerateButton>
        </SpinDiv>
        <History>{historyItems}</History>
      </FlexContainer>
    </Wrapper>
  );
};

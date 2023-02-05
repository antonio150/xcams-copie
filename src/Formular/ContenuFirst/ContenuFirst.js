import React from 'react'
import { ContenueFirst, ContenuFirstOne, ContenuFirstOneButton, ContenuFirstOneResideListe, 
        ContenuFirstOneDiffSolo, ContenuFirstOneDiffuseur, ContenuFirstOneReside, ContenuFirstOneResideDataliste, 
         ContenuFirstOneResideTitre, ContenuFirstOneSexe, ContenuFirstOneSexeFemmSeul, ContenuFirstOneTitre, ContenuFirstTwo, ContenuFirstTwoButton, ContenuFirstTwoDiffSolo, ContenuFirstTwoDiffuseur, ContenuFirstTwoReside, ContenuFirstTwoResideListe, ContenuFirstTwoResideTitre, ContenuFirstTwoSexe, ContenuFirstTwoSexeFemmSeul, ContenuFirstTwoTitre, ContenuFirstOneResideOption } from './ContenuFirst.element'

const ContenuFirst = () => {
  return (
    <ContenueFirst>

        <ContenuFirstOne>
                <ContenuFirstOneTitre>
                        Profil diffuseur
                </ContenuFirstOneTitre>
                <ContenuFirstOneReside>
                        <ContenuFirstOneResideTitre>
                                Pays de résidence
                        </ContenuFirstOneResideTitre>
                       

                        <ContenuFirstOneResideDataliste id="browsers">
                                <ContenuFirstOneResideOption value="Edge">France</ContenuFirstOneResideOption>
                                <ContenuFirstOneResideOption value="Firefox">Allemagne</ContenuFirstOneResideOption>
                                <ContenuFirstOneResideOption value="Chrome">Russie</ContenuFirstOneResideOption>
                                <ContenuFirstOneResideOption value="Opera">Japan</ContenuFirstOneResideOption> 
                                
                        </ContenuFirstOneResideDataliste>
                                

                </ContenuFirstOneReside>

                <ContenuFirstOneDiffuseur>
                        <ContenuFirstOneDiffSolo>
                                DIFFUSEUR SOLO
                        </ContenuFirstOneDiffSolo>
                        <ContenuFirstOneDiffSolo>
                                DIFFUSEUR DUO
                        </ContenuFirstOneDiffSolo>
                </ContenuFirstOneDiffuseur>

                <ContenuFirstOneSexe>
                        <div>Je suis</div>
                        <ContenuFirstOneSexeFemmSeul>
                                UNE FEMME SEULE
                        </ContenuFirstOneSexeFemmSeul>
                        <ContenuFirstOneSexeFemmSeul>
                                UN TRANSEXUEL
                        </ContenuFirstOneSexeFemmSeul>
                </ContenuFirstOneSexe>

                <ContenuFirstOneButton>
                        POURSUIVRE
                </ContenuFirstOneButton>

        </ContenuFirstOne>

        <ContenuFirstOne>
                <ContenuFirstOneTitre>
                        Profil diffuseur
                </ContenuFirstOneTitre>

                <ContenuFirstOneReside>
                        <ContenuFirstOneResideTitre>
                                Pays de résidence
                        </ContenuFirstOneResideTitre>
                        <ContenuFirstOneResideDataliste id="browsers">
                                <ContenuFirstOneResideOption value="Edge">France</ContenuFirstOneResideOption>
                                <ContenuFirstOneResideOption value="Firefox">Allemagne</ContenuFirstOneResideOption>
                                <ContenuFirstOneResideOption value="Chrome">Russie</ContenuFirstOneResideOption>
                                <ContenuFirstOneResideOption value="Opera">Japan</ContenuFirstOneResideOption> 
                                
                        </ContenuFirstOneResideDataliste>

                </ContenuFirstOneReside>

                <ContenuFirstOneDiffuseur>
                        <ContenuFirstOneDiffSolo>
                                DIFFUSEUR SOLO
                        </ContenuFirstOneDiffSolo>
                        <ContenuFirstOneDiffSolo>
                                DIFFUSEUR DUO
                        </ContenuFirstOneDiffSolo>
                </ContenuFirstOneDiffuseur>

                <ContenuFirstOneSexe>
                        Nous sommes
                        <ContenuFirstOneSexeFemmSeul>
                                DUO FEMME AVEC FEMME
                        </ContenuFirstOneSexeFemmSeul>
                        <ContenuFirstOneSexeFemmSeul>
                                DUO FEMME AVEC HOMME
                        </ContenuFirstOneSexeFemmSeul>
                        <ContenuFirstOneSexeFemmSeul>
                                DUO TRANSEXUEL AVEC TRANSEXUEL
                        </ContenuFirstOneSexeFemmSeul>
                        <ContenuFirstOneSexeFemmSeul>
                                DUO TRANSEXUEL AVEC FEMME
                        </ContenuFirstOneSexeFemmSeul>
                        <ContenuFirstOneSexeFemmSeul>
                                DUO TRANSEXUEL AVEC HOMME
                        </ContenuFirstOneSexeFemmSeul>

                </ContenuFirstOneSexe>

                <ContenuFirstOneButton>
                        POURSUIVRE
                </ContenuFirstOneButton>


        </ContenuFirstOne>
      
    </ContenueFirst>
  )
}

export default ContenuFirst

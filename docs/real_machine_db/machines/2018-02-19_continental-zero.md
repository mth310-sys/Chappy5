# No.1175 コンチネンタルゼロ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: コンチネンタルゼロ
- manufacturer: ユニバーサルブロス
- releaseDateCanonical: 2018-02-19
- generation: 5.9号機世代
- systemType: ノーマルA / 完全告知 / リアルボーナス
- formalModelName: `コンチネンタルゼロZZ`
- certificationNumber: `7S1397`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`コンチネンタルゼロZZ`、検定番号`7S1397`、メーカー`ユニバーサルブロス`、導入開始日2018-02-19を掲載。
- ちょんぼりすたも2018-02-19、ユニバーサル公式ブログは2018-02-07時点で「全国導入開始が再来週」と告知しており整合。
- PiDEA / グリーンべるとは2018-01-15のユニバーサル本社新機種発表会を報道し、ユニバーサルブロス製であることを確認できる。

## performanceCore

### payoutRateBySetting
- setting1: 97.1%
- setting2: 98.6%
- setting3: 100.8%
- setting4: 103.7%
- setting5: 106.7%
- setting6: 110.7%

- HAZUSE、P-WORLD、ちょんぼりすた、2-9伝説で一致。

### bonusBySetting
BIG:
- setting1: 1/278.9
- setting2: 1/276.5
- setting3: 1/267.5
- setting4: 1/260.1
- setting5: 1/248.2
- setting6: 1/234.9

REG:
- setting1: 1/431.2
- setting2: 1/385.5
- setting3: 1/360.1
- setting4: 1/343.1
- setting5: 1/319.7
- setting6: 1/282.5

bonusCombined:
- setting1: 1/169.3
- setting2: 1/161.0
- setting3: 1/153.5
- setting4: 1/147.9
- setting5: 1/139.7
- setting6: 1/128.3

- HAZUSE、P-WORLD、ちょんぼりすた、2-9伝説で実質一致。

### baseGamesPer50
- simplifiedPublished: 約35G/50枚
- bySetting:
  - setting1: 35.3G
  - setting2: 35.5G
  - setting3: 35.9G
  - setting4: 36.2G
  - setting5: 36.7G
  - setting6: 37.2G
- ちょんぼりすたと期待値見える化が設定別値で一致。2-9伝説も約35G/1kと整合。

### netIncrease
- `NOT_APPLICABLE_NORMAL_A`

### basicPayout
- BIG BONUS: 312枚
- REG BONUS: 最大104枚
- P-WORLD、ちょんぼりすた、スロパチネットで一致。
- 払い出し終了条件はBIG 345枚超、REG 105枚超。

### ceiling
- `NONE`
- HAZUSE、ちょんぼりすた、2-9伝説、スロパチネットで天井非搭載が一致。

## modeSpecificMinimumData
- ボーナスのみで出玉を増やす完全告知ノーマルタイプ。
- AT/ART/CZ、ゲーム数解除モード、天国モードは確認されない。
- 第3停止ボタンを離した時の告知ランプ点灯が基本の後告知。ボーナス成立時は告知される。

## resetBehavior

### settingChangeBehavior
- 天井・ゲーム数解除・AT/ART/CZ内部モードは非搭載のため、それらに対する設定変更リセットは`NOT_APPLICABLE`。
- HAZUSE解析で、REG中設定示唆に用いる「REG当選時の総ゲーム数」は**設定変更時にリセット**されることを確認。
- 成立済みボーナス、初期出目、その他の低レベル内部状態について本機固有の直接契約は、機種名/型式名と「設定変更」「リセット」「朝一」「据え置き」「ガックン」「電源OFF ON」「出目」「ボーナス成立」を組み替え、当時解析・後年DBを横断したが確認できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを純電源OFF→ONと独立条件で明示し、成立済みボーナスや低レベル内部状態まで固定した本機固有資料は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- ただし、ホール朝一で電源OFF→ONを伴う場合、下記の総ゲーム数は電源ON/OFFでリセットされるため、その表示/設定示唆用カウンタは前日から持ち越されない。

### powerCycleBehavior
- HAZUSEおよび期待値見える化は、REG中設定示唆に使用する「総ゲーム数」が**電源OFF→ONでもリセット**されると明記。
- よってこの総ゲーム数は「設定変更のみ」を判別するカウンタではない。
- 成立済みボーナス/低レベル内部状態/初期出目の純電源OFF→ON契約は`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- gameNumberReleaseCounter: `NOT_APPLICABLE`
- regSettingHintTotalGameCounter:
  - settingChange: `RESET`
  - powerOffOn: `RESET`
  - carryOverWithoutPowerCycle: `UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`
- この「総ゲーム数」は天井/当選ゲーム数ではなく、REG中設定示唆の参照用累積ゲーム数なので定義を分離して保存。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`

### modeAfterReset
- ゲーム数解除モード/天国モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`

### stateAfterReset
- AT/ART/CZ高確等: `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`
- 成立済みボーナス等の低レベル状態: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`
- 本機はボーナスのみで出玉を増やすノーマルAとして公式/業界/解析資料が一致。有利区間を用いるAT/ART/CZゲーム性は確認しない。

### resetBenefits
- 天井短縮、朝一専用モード、初当たり/CZ/AT優遇: `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更による主要な朝一出玉恩恵は確認できない。

### resetPenalties
- 設定変更専用の主要な数値的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- REG中設定示唆の総ゲーム数が0から再スタートする点は、出玉的不利ではなく設定示唆条件の初期化として分離。

### resetDetection
- REG中告知ランプの「総ゲーム数別設定示唆」は、総ゲーム数が設定変更**だけでなく電源OFF→ONでもリセット**されるため、朝一の設定変更/据え置き判別には使えない。
- 本機固有のガックン発生条件/確率、初期出目、ランプによる確定的な設定変更判別は、再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- REG中告知ランプ自体は設定示唆であり、設定変更判別と混同しない。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`
- regSettingHintTotalGameCounterResetOnSettingChange: `YES`
- regSettingHintTotalGameCounterResetOnPowerOffOn: `YES`

## morningRelatedPublicNumbers
- REG当選時の総ゲーム数別告知ランプ設定示唆区分（HAZUSE）:
  - 1–999G: 点灯なら設定5以上濃厚
  - 1000–2999G: 点灯なら設定2以上濃厚
  - 3000–4999G: 点灯なら設定3以上濃厚
  - 5000–5999G: 点灯なら設定4以上濃厚
  - 6000G以上: 点灯なら設定4以上濃厚
- 点灯率も設定/総ゲーム数帯別に公開されているが、これは通常の設定推測テーブルであり、完全再現用詳細抽選は本DBの必須範囲外。朝一関連として重要なのは「設定変更・電源ON/OFFの双方で総ゲーム数がリセット」の契約。
- 期待値見える化には5000–5999Gの示唆を「設定5以上確定」とする表記があり、HAZUSEの「設定4以上濃厚」と競合するため下記CONFLICT保持。

## conflicts
- `CONFLICT_REG_HINT_5000_5999G`:
  - HAZUSE: 5000–5999Gで点灯 → 設定4以上濃厚。
  - 期待値見える化: 5000–5999Gで点灯 → 設定5以上確定。
  - 平均・統合せず双方を保持。resetBehaviorの「総ゲーム数が設定変更/電源OFF→ONでリセット」という契約自体は両資料で一致。
- `CONFLICT_RETROSPECTIVE_SYSTEM_DESCRIPTION`:
  - 5号機クロニクルはA+RT / BIG最大259枚等と記載するが、ユニバーサル公式系・P-WORLD・HAZUSE・当時解析複数は「ボーナスのみで増やすノーマルA」「BIG312枚 / REG104枚」で一致。
  - 当時一次/高信頼解析をcanonicalとし、後年回顧資料のA+RT説明は誤混入疑いとして性能コアへ採用しない。

## missingFields
- settingChange時の成立済みボーナス/低レベル状態/初期出目: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle時の成立済みボーナス/低レベル状態/初期出目: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き独立契約: `UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`
- ガックン等の確定的変更判別: `UNVERIFIED_AFTER_RESEARCH`
- ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — コンチネンタルゼロ
   - https://hazuse.com/machine/pachislot/7S1397/
   - 型式`コンチネンタルゼロZZ`、検定番号`7S1397`、メーカー、2018-02-19、天井なし、設定別ボーナス/機械割。
   - confidence: `ANALYSIS_HIGH`

2. HAZUSE — コンチネンタルゼロ 演出 / REG中設定示唆
   - https://hazuse.com/machine/pachislot/7S1397/genre/202/
   - REG当選時の総ゲーム数別設定示唆、総ゲーム数は設定変更時および電源ON/OFF時にリセット。
   - confidence: `ANALYSIS_HIGH`

3. P-WORLD — コンチネンタルゼロ
   - https://www.p-world.co.jp/machine/database/8580
   - ユニバーサルブロス、ノーマル完全告知、BIG312枚 / REG最大104枚、設定別BIG/REG/合算/機械割。
   - confidence: `INDUSTRY`

4. ちょんぼりすた — コンチネンタルゼロ
   - https://chonborista.com/slot/universal-slot/54280/
   - 2018-02-19、約35G/50枚、設定別35.3–37.2G、天井非搭載、設定別ボーナス/機械割、BIG312枚/REG104枚。
   - confidence: `ANALYSIS_HIGH`

5. 期待値見える化 — コンチネンタルゼロ 設定判別
   - https://slotjin.com/slot-tool/continentalzero/
   - 設定別コイン持ち35.3–37.2G、REG中総ゲーム数は設定変更or電源OFF→ONでリセット。5000–5999G示唆はHAZUSEと競合。
   - confidence: `ANALYSIS_HIGH`

6. 2-9伝説 — コンチネンタルゼロ
   - https://29den.com/continentalzero/
   - 2018-02-19、約35G/1k、天井なし、設定別ボーナス/機械割。
   - confidence: `ANALYSIS_HIGH`

7. スロパチネット — コンチネンタルゼロ
   - https://slopachi-net.com/continental-zero
   - 2018-02-19、Aタイプ完全告知、BIG312枚 / REG104枚、天井非搭載。
   - confidence: `ANALYSIS_SINGLE`

8. ユニバ公式ブログ — コンチネンタルゼロ／動画でコンチ音を聞いてみよう♪
   - https://ameblo.jp/aruzefreaks/entry-12350863770.html
   - 2018-02-07時点で完全告知機シリーズ第1弾、全国導入開始が再来週と告知。
   - confidence: `OFFICIAL`

9. ユニバーサルエンターテインメント — コンチネンタルアーカイブズ配信開始
   - https://www.universal-777.co.jp/news/20180301001385/
   - 2018年2月発売の完全告知機シリーズ第1弾としてコンチネンタルゼロを公式確認。
   - confidence: `OFFICIAL`

10. PiDEA — 初のユニバ製「CRバジリスク」＆伝統の「コンチネンタルゼロ」登場
    - https://www.pidea.jp/articles/%E5%88%9D%E3%81%AE%E3%83%A6%E3%83%8B%E3%83%90%E8%A3%BD%E3%80%8CCR%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%E3%80%8D%EF%BC%86%E4%BC%9D%E7%B5%B1%E3%81%AE%E3%80%8C%E3%82%B3%E3%83%B3%E3%83%81%E3%83%8D%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%BC%E3%83%AD%E3%80%8D%E7%99%BB%E5%A0%B4
    - 2018-01-15発表会、ユニバーサルブロス製コンチネンタルゼロを業界一次報道。
    - confidence: `INDUSTRY`

11. グリーンべると — バジリスクがついにぱちんこで「開眼」！
    - https://web-greenbelt.jp/00010165/
    - 2018-01-15新機種発表会、ユニバーサルブロス製を確認。
    - confidence: `INDUSTRY`

12. 5号機クロニクル — ユニバーサル系5号機一覧
    - https://5goki.com/universal
    - 後年回顧資料。A+RT / BIG最大259枚等、当時資料多数と整合しない記述があるためCONFLICT監査用途のみ。
    - confidence: `CONFLICT`

## qaNotes
- 「コンチネンタルゼロ」「コンチネンタルZERO」「コンチネンタルゼロZZ」「7S1397」「ユニバーサルブロス」を組み替え、性能、設定変更、リセット、朝一、据え置き、電源OFF ON、ガックン、出目、ボーナス成立、総ゲーム数を再探索した。
- 天井/ゲーム数解除がないため、REG中設定示唆の「総ゲーム数」を天井カウンタと混同しない。
- 総ゲーム数RESETは設定変更と純電源OFF→ONの双方で発生するため、変更判別材料ではない。
- 5号機クロニクルのA+RT説明は複数の当時資料と衝突するため、平均/混合せずCONFLICTとして隔離した。

# パチスロ1000ちゃん ごらくver.

No: 1403
machineName: パチスロ1000ちゃん ごらくver.
machineNameVariants: Sパチスロ1000ちゃん ごらくver. / パチスロ1000ちゃん ごらくバージョン / 1000ちゃんごらくver. / Sパチスロ1000ちゃんG1
manufacturer: オーイズミ（ダイナム共同開発PB）
releaseDate: 2021-04-05
formalModelName: Sパチスロ1000ちゃんG1
certificationNumber: 0S0313

generation: 6.1号機
systemType: A+AT / リアルボーナス+AT / ダイナムPB / 5段階設定（2・3・4・5・6）

## identity / release
- HAZUSEで型式 `Sパチスロ1000ちゃんG1`、検定番号 `0S0313`、メーカー オーイズミ、導入開始日2021-04-05を確認。
- ダイナム公式発表で、オーイズミと共同開発した同社初のパチスロPB機として2021年4月上旬から約600台導入予定を確認。
- K-Navi、ちょんぼりすたでも2021-04-05導入で一致。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 2 | 99.5% |
| 3 | 100.5% |
| 4 | 101.7% |
| 5 | 103.0% |
| 6 | 107.5% |
- 設定1は非搭載。
- HAZUSE、ちょんぼりすたで一致。業界記事も設定1非搭載を明記。
- reliability: ANALYSIS_HIGH / INDUSTRY

## initialHitBySetting
| 設定 | BIG合算 | LIVE BONUS | ボーナス合算 | CZ | AT初当たり |
|---:|---:|---:|---:|---:|---:|
| 2 | 1/279 | 1/390 | 1/163 | 1/482 | 1/380 |
| 3 | 1/274 | 1/383 | 1/160 | 1/473 | 1/370 |
| 4 | 1/271 | 1/374 | 1/157 | 1/469 | 1/365 |
| 5 | 1/266 | 1/366 | 1/154 | 1/461 | 1/356 |
| 6 | 1/250 | 1/302 | 1/137 | 1/342 | 1/300 |
- HAZUSE詳細値とちょんぼりすたで一致。グリーンべると/P-WORLD業界記事のレンジ（BB 1/279〜1/250、RB相当 1/390〜1/302、合算1/163〜1/137、AT1/380〜1/300）とも整合。
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 37.5G/50枚（全設定共通）。
- HAZUSEで確認。1gekiは後年ページで調査中表記のため、HAZUSEをcanonicalとする。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「1000★CHANCE」: 約+1.0枚/G、1セット30G。
- 上位AT「1000★PARTY」も純増約+1.0枚/G系統。
- 「PREMIUM1000★CHANCE」は1000枚獲得まで継続する差枚数管理AT。
- reliability: ANALYSIS_HIGH / INDUSTRY

## basicPayout
- BIG BONUS: 平均約170枚。
- LIVE BONUS: 平均約60枚。
- AT「1000★CHANCE」: 1セット30G、純増約1.0枚/G。
- PREMIUM1000★CHANCE: 1000枚獲得まで継続。
- ダイナム系業界発表、グリーンべると、P-WORLD、HAZUSEで照合。
- reliability: OFFICIAL_DERIVED / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はリアルボーナス、CZ、AT初当たりを抽選するA+AT型。
- 通常時内部状態は通常/高確/超高確。
- 天井は有利区間移行時に333G・555G・777Gのいずれかへ振り分け、到達後はAT突入濃厚CZへ移行。
- 有利区間移行時の状態振り分けは設定差あり。
- 親機「パチスロ1000ちゃん（2020）」とは別スペック。ごらくver.専用値のみcanonical化。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_CEILING_AND_STATE_TABLES
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をリセットし、内部状態を再抽選。
- 設定変更時は有利区間移行時抽選を受ける構造で、通常/高確/超高確を再抽選する。
- 実戦上、設定変更後は1000ちゃんステージから開始とHAZUSEに記載。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は設定変更を伴わないため、少なくとも天井G・内部状態について設定変更リセット契約を受けない扱い。本機の純電断欄では天井G・状態の引継ぎが明記されている。
- 据え置き専用の追加恩恵/不利は確認されない。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井までのゲーム数を引き継ぐ。
- 内部状態も引き継ぐ。
- 電源OFF→ON時の液晶ステージはHAZUSEで「調査中」のため固定しない。
- reliability: ANALYSIS_HIGH / UNVERIFIED（液晶ステージのみ）

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電断: CARRY_OVER。
- 天井は有利区間移行時333/555/777Gのいずれか。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更専用に単一の短縮天井へ固定される仕様ではなく、有利区間移行時に333G/555G/777Gを再抽選。
- 最深天井777G。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 一般的なゲーム数モードというより、有利区間移行時に天井G振り分けと内部状態振り分けを再抽選する構造。
- 設定変更時のみの別テーブルではなく、有利区間移行時共通テーブルとして保存する。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時＝内部状態再抽選。
- 純電断＝内部状態引継ぎ。
- 有利区間移行時状態振り分け（設定2→6）:
  - 通常: 61.9 / 59.9 / 58.8 / 56.4 / 52.8%
  - 高確: 35.0 / 35.8 / 36.3 / 37.2 / 38.7%
  - 超高確: 3.1 / 4.3 / 5.0 / 6.4 / 8.5%
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更では前有利区間を引き継がず、有利区間移行時抽選を受ける。
- 純電断では天井G・内部状態引継ぎが確認されるため、ホール経営用モデルでは有利区間進行もCARRY_OVERとして扱う。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は天井振り分けを再抽選し、333G/555Gが選択される可能性がある。
- ただし設定変更専用優遇ではなく、有利区間移行時共通抽選。
- 朝一AT直撃保証等の設定変更専用恩恵は確認されない。

### resetPenalties
- 設定変更専用の定量的不利要素は公開資料から確認できず `NO_PUBLIC_RESET_SPECIFIC_PENALTY_FOUND_AFTER_RESEARCH`。

### resetDetection
- 実戦上、設定変更後は1000ちゃんステージ開始とHAZUSEに記載。ただし液晶対策や例外条件までの公開契約は確認できないため確定判別ではなく補助情報扱い。
- 本機固有のガックン発生条件/発生率、有利区間ランプを用いた朝一変更判別の直接資料は、表記揺れ・型式・検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH（開始ステージ実戦値） / UNVERIFIED_AFTER_RESEARCH（ガックン等）

### numericResetData
- 有利区間移行時の天井G振り分け:
  - 設定2: 333G 3.9% / 555G 21.1% / 777G 75.0%
  - 設定3: 333G 7.0% / 555G 25.0% / 777G 68.0%
  - 設定4: 333G 9.0% / 555G 27.0% / 777G 64.1%
  - 設定5: 333G 12.1% / 555G 32.8% / 777G 55.1%
  - 設定6: 333G 16.0% / 555G 44.1% / 777G 39.8%
- 有利区間移行時の通常/高確/超高確振り分けはstateAfterReset記載。
- 上記はいずれも「設定変更専用テーブル」ではなく有利区間移行時共通値として区別する。
- reliability: ANALYSIS_HIGH

## conflicts
- 大きな性能数値CONFLICTなし。
- 一部後年1gekiページで設定L表記が混在する箇所がある一方、当時業界発表・HAZUSE・K-Navi・ちょんぼりすたは設定2〜6の5段階で一致。本DBでは当時資料群を優先して設定2〜6をcanonicalとする。
- 仕様呼称にA+ART / A+RT風 / A+ATが混在するが、AT「1000★CHANCE」を搭載するため本DBはA+ATをcanonicalとする。

## missingFields
- 純電断後の液晶開始ステージ: UNVERIFIED
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプを用いた朝一設定変更確定条件: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12

1. ダイナム公式プレスリリース（PR TIMES転載）「ダイナム史上初のパチスロPB機 Sパチスロ1000ちゃん ごらくver.」
   - https://prtimes.jp/main/html/rd/p/000000304.000013913.html
   - 共同開発、PB機、2021年4月上旬、約600台。
   - reliability: OFFICIAL
2. ダイナム PB機ラインナップ
   - https://www.dynam.jp/pb/lineup/
   - 2021年4月のPB機、オーイズミ共同開発6号機。
   - reliability: OFFICIAL
3. HAZUSE「パチスロ1000ちゃん ごらくver. 基本スペック」
   - https://hazuse.com/machine/pachislot/0S0313/genre/201/
   - 型式、検定番号、導入日、設定別ボーナス/CZ/AT、37.5G/50枚、機械割、獲得枚数。
   - reliability: ANALYSIS_HIGH
4. HAZUSE「天井・設定変更」
   - https://hazuse.com/machine/pachislot/0S0313/genre/207/
   - 333/555/777G天井振り分け、設定変更/純電断時の天井G・状態処理、設定変更後ステージ実戦値。
   - reliability: ANALYSIS_HIGH
5. HAZUSE「AT/ART」
   - https://hazuse.com/machine/pachislot/0S0313/genre/209/
   - 有利区間移行時の通常/高確/超高確振り分け。
   - reliability: ANALYSIS_HIGH
6. グリーンべると「ダイナム史上初となるパチスロPB機を発表」2021-03-08
   - https://web-greenbelt.jp/post-44701/
   - 6号機、設定1非搭載、BB/RB/合算/ATレンジ、平均170/60枚、AT純増約1枚/G。
   - reliability: INDUSTRY
7. P-WORLD業界ニュース「ダイナム、PB機初のパチスロ機含む2機種を4月に導入」
   - https://news.p-world.co.jp/articles/15953/yugitsushin
   - PB機、5段階設定、BB/RB、AT純増、導入時期。
   - reliability: INDUSTRY
8. ちょんぼりすた「1000ちゃん ごらくバージョン」
   - https://chonborista.com/slot/oizumi-slot/137312/
   - 2021-04-05導入、設定別スペック、最深777G、親機との差分。
   - reliability: ANALYSIS_HIGH
9. K-Navi「Sパチスロ1000ちゃん ごらくver.」
   - https://p-kn.com/slot/3570/
   - 2021-04-05導入、設定2〜6、基本ゲーム性。
   - reliability: ANALYSIS_SINGLE

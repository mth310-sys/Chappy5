machineName: ドリームハナハナ-30
manufacturer: パイオニア
releaseDate: 2016-06-06
recordNumber: 985
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 30φ
formalModelName: ドリームハナハナ/DX-30
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パイオニア製、ハナハナシリーズ第12作。
- パチビーとALL7の2016年6月導入一覧は2016-06-06。K-Naviは2016-06-27、ちょんぼりすたは2016-06-20、グリーンべるとは2016-05-11時点で「6月中旬納品予定」とするため、導入日の資料差を `CONFLICT_RELEASE_DATE_2016_06_06_VS_2016_06_20_VS_2016_06_27` として保持する。本DBの時系列canonicalは、現存する機種DBで最も早いホール導入日として明示される2016-06-06を採用。
- 型式 `ドリームハナハナ/DX-30` は検定通過記事、中古実機流通資料、後年の実機シミュレータ資料で複数確認。
- 検定番号は「ドリームハナハナ/DX-30」「パイオニア」「検定」「6S」等へ検索語・資料系統を変えて再探索したが、番号そのものを直接固定できず推測しない。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 111.0% |

- グリーンべると、K-Navi、P-WORLD系整理、複数解析で同系列。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
ボーナス確率:
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/318 | 1/528 | 1/198 |
| 2 | 1/306 | 1/492 | 1/188 |
| 3 | 1/293 | 1/458 | 1/179 |
| 4 | 1/277 | 1/420 | 1/167 |
| 5 | 1/262 | 1/385 | 1/156 |
| 6 | 1/246 | 1/352 | 1/145 |

- グリーンべると、K-Navi、P-WORLD、けんのスロットシミュレーションで主系列が一致。
- ちょんぼりすた/すろぱちくえすとは設定5 REGを **1/395**、合算を **1/158** とするため `CONFLICT_SETTING5_REG_1_385_VS_1_395_AND_COMBINED_1_156_VS_1_158` として平均せず保持。
reliability: INDUSTRY_ANALYSIS_HIGH_WITH_SETTING5_CONFLICT

## baseGamesPer50
- **約38.5G/50枚**。
- パイオニア発表を報じたグリーンべると/日刊アミューズメント、K-Navi、なな徹で一致。
reliability: INDUSTRY_HIGH_MULTI_SOURCE

## netIncrease
- **NOT_APPLICABLE_AS_AT_ART_NET_INCREASE**。
- AT/ART非搭載のリアルボーナス主体ノーマルタイプ。

## basicPayout
- BIG BONUS: **最大312枚**。
- REG BONUS: **最大130枚**。
- グリーンべると、日刊アミューズメント、P-WORLD、K-Naviで一致。
reliability: INDUSTRY_DATABASE_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- AT/ART/CZ、通常時の天国モード等は **NOT_APPLICABLE**。
- 設定判別要素としてREG中サイドランプ、BIG/REG後パネルフラッシュ等を持つが、完全再現用の全示唆振り分けはミッション範囲外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_POWER_CYCLE_GAP
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 天井・通常時モードは非搭載のため、それらのリセット/再抽選は **NOT_APPLICABLE**。
- 設定変更後の最初のBIG終了時は、全設定共通でパネルフラッシュ抽選が通常時と異なる専用テーブルになる。
- 設定変更後1G目はリールガックンが判別材料になるとの実機検証資料あり。ただし個体差・ホール対策があり確定判別にはしない。
reliability: PERIOD_ANALYSIS_HIGH_FOR_RESET_SPECIFIC_PANEL_FLASH_AND_GAKKUN

### carryOverBehavior
- 据え置き時に引き継ぐべき天井ゲーム数・通常時モードは **NOT_APPLICABLE / CEILING_NONE / MODE_NONE**。
- 据え置き時は設定変更専用の「初回BIG後50%パネルフラッシュ」条件には該当しない。
- それ以外の本機固有の永続内部状態について、直接比較できる公開資料は確認できず、存在を推測しない。
reliability: ANALYSIS_HIGH_FOR_NON_APPLICABLE_CEILING_MODE

### powerCycleBehavior
- 純電源OFF→ONのみの場合の、設定変更専用初回BIGフラッシュ条件・リール初動・表示状態を本機固有に直接比較する資料は、機種名/型式名/電源OFF ON/朝一/据え置き/ガックンへ検索語を変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井・通常時モードは非搭載なので、その点の引継ぎ比較は **NOT_APPLICABLE**。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- **NOT_APPLICABLE / CEILING_NONE**。
- ボーナス間ゲーム数は履歴表示上の値であり、内部天井進捗としてのリセット対象はない。

### ceilingAfterReset
- **NOT_APPLICABLE / CEILING_NONE**。
- リセット専用短縮天井なし。

### modeAfterReset
- **NOT_APPLICABLE / NORMAL_GAME_MODE_NONE_CONFIRMED**。
- 朝一専用モード・リセットモードの公開確定情報なし。

### stateAfterReset
- AT/ART高確、天国等の通常時状態管理は **NOT_APPLICABLE**。
- 設定変更後のみ初回BIG終了時パネルフラッシュ抽選が専用化するため、この「設定変更フラグ相当の朝一条件」は別項目として保持。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後の最初のBIG終了時は **パネルフラッシュ合計50%**（上のみ37.5% + 上下12.5%）。これは客側の変更推測材料になる。
- 天井短縮、初当たり優遇、朝一高確などの出玉面の固定リセット恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 天井消滅等の設定変更固有不利は天井非搭載のため **NOT_APPLICABLE**。
- その他の主要な設定変更ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- リールガックン: 設定変更時は据え置き時よりガクッとした挙動が確認できる実機検証あり。ただしハナハナは判別が難しく、個体差・1G回し等の対策があるため **SUPPORTING_INDICATOR_NOT_DEFINITIVE**。
- 初回BIG後パネルフラッシュ: 設定変更後は全設定共通で合計50%。ただし通常時BIG後にもパネルフラッシュ自体は発生し得るため、発生だけで設定変更確定ではない。
- BETランプについては、クイーンハナハナ以降のシリーズでは設定変更判別に使えないとの解析整理があり、本機でも主要確定判別には採用しない。

### numericResetData
- **設定変更後の最初のBIG終了時パネルフラッシュ**:
  - 上のみ: **37.5%**
  - 上下: **12.5%**
  - 合計: **50.0%**
  - 全設定共通
- 通常BIG後のパネルフラッシュ率は設定1→6で上のみ7.3/7.9/8.8/9.7/10.6/11.7%、上下2.4/2.6/2.9/3.2/3.5/3.9%とされるが、これはリセット専用数値ではないため比較用補助値としてのみ保持。

## dataQualityNotes
- releaseDateは2016-06-06 / 06-20 / 06-27で競合。最早の実導入日を明示するパチビー/ALL7を時系列canonicalとし、他日付はCONFLICT保持。
- 設定5 REGは1/385と1/395、合算は1/156と1/158で競合。グリーンべると・K-Navi・P-WORLD系で支持の厚い1/385・1/156をcanonicalにし、別系列を削除しない。
- powerCycleBehaviorは本機固有の直接比較を十分再探索しても固定できずUNVERIFIED。設定変更と純電断を同義扱いしない。
- ガックンは有力な変更推測材料だが確定契約ではない。

## sources
取得日: 2026-09-08

1. グリーンべると — 高ベースで長く手軽に遊べる『ドリームハナハナ』
   - https://web-greenbelt.jp/00008644/
   - 50枚約38.5G、BIG1/318〜1/246、REG1/528〜1/352、合算1/198〜1/145、出玉率96〜111%、BIG312枚/REG130枚、6月中旬納品予定。
   - reliability: INDUSTRY
2. 日刊アミューズメント — パイオニア「ドリームハナハナ-30」発表
   - https://www.nikkansports.com/amusement/pachinko/news/1646787.html
   - 2016-05-11展示会、Aタイプ、最大312/130枚、38.5G/50枚。
   - reliability: INDUSTRY
3. パチビー — ドリームハナハナ-30
   - https://www.pachibee.jp/movies/index/12732
   - 導入日2016-06-06、5号機ノーマル/完全告知/沖スロ。
   - reliability: PERIOD_DATABASE
4. ALL7 — 2016年6月新台導入予定一覧
   - https://www.all7.jp/plans/index/2016/06
   - ドリームハナハナ-30 2016-06-06。
   - reliability: PERIOD_DATABASE
5. K-Navi — ドリームハナハナ-30
   - https://p-kn.com/slot/2506/
   - ホール導入開始2016-06-27、全設定BIG/REG/合算/機械割、38.5G、払い出し条件。
   - reliability: PERIOD_DATABASE_CONFLICT
6. P-WORLD — ドリームハナハナ-30
   - https://www.p-world.co.jp/machine/database/8042
   - 5号機ノーマル/完全告知/沖スロ、BIG312枚/REG130枚、設定別BIG/REG。
   - reliability: DATABASE
7. すろぱちくえすと — ドリームハナハナ 設定判別・設定差
   - https://www.slopachi-quest.com/article/dream-hanahana/
   - ガックン実機検証、設定変更後初回BIGパネルフラッシュ50%（上37.5%/上下12.5%）、通常BIG後数値、BETランプ判別注意。
   - reliability: ANALYSIS_HIGH
8. なな徹 — ドリームハナハナ-30 小役確率
   - https://nana-press.com/kaiseki/machine/32/545/
   - 50枚約38.5G。
   - reliability: ANALYSIS
9. けんのスロットシミュレーション — ドリームハナハナ解析情報
   - https://kenslo65536.com/kaiseki/hanahana-dream-30.html
   - 5号機ノーマル、機械割、BIG/REG/合算、312/130枚。
   - reliability: ANALYSIS
10. ちょんぼりすた — ドリームハナハナ
   - https://chonborista.com/slot/pionia-slot/20098/
   - 2016-06-20導入、設定5 REG1/395・合算1/158の競合値、その他設定値。
   - reliability: ANALYSIS_CONFLICT
11. p-media — ドリームハナハナ-30検定通過
   - https://p-media.info/%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%96%B0%E6%A9%9F%E7%A8%AE%E7%A2%BA%E8%AA%8D%EF%BC%8F%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A/
   - 型式ドリームハナハナ/DX-30、メーカー パイオニア。
   - reliability: INDUSTRY_DATABASE
12. 中一商事 — パイオニア ドリームハナハナ-30 中古実機
   - https://store.shopping.yahoo.co.jp/nakaiticom/60006.html
   - 型式ドリームハナハナ/DX-30、5号機ノーマルA、312/130枚。
   - reliability: USED_MACHINE_DATABASE

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehaviorの本機固有直接比較: UNVERIFIED_AFTER_RESEARCH

## conflicts
- CONFLICT_RELEASE_DATE_2016_06_06_VS_2016_06_20_VS_2016_06_27
- CONFLICT_SETTING5_REG_1_385_VS_1_395_AND_COMBINED_1_156_VS_1_158

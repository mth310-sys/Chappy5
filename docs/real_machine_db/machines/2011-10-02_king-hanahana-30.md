# キングハナハナ-30

machineName: キングハナハナ-30
aliases: キングハナハナ‐30 / KING HANA HANA / キンハナ
manufacturer: パイオニア
formalModelName: **UNVERIFIED_AFTER_RESEARCH**
approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
releaseDate: 2011-10-02
releaseDateStatus: **CONFLICT_OR_MARKET_DATE_DEFINITION_DIFFERENCE**。パイオニア公式は2011年10月発売。2011-08-18のグリーンべると業界記事は「納品は10月2日からを予定」と記載。K-Naviの2011-08-18内覧会記事は「ホールへの導入は10月からを予定」。さらにK-Naviには2011-10-05付の実戦レビューが存在し、少なくとも10月5日までに市場稼働していたことと整合する。以前のhandoffにあった10月10日説は今回の再探索では直接根拠を回収できなかったため主日付に採用しない。本DBのchronology keyは最古の具体的市場投入根拠である納品開始予定日2011-10-02を採用し、公式月表記との差は保持する。
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 30Φ沖スロ
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ケロット2」を確認して開始。
- 開始時正本は recordCount 610 / chronologicalFrontier 2011-10-03。
- repo code searchで「キングハナハナ」ヒットなし、想定パス `docs/real_machine_db/machines/2011-10-10_king-hanahana-30.md` も404を確認。
- 外部再探索で2011-08-18グリーンべるとに「納品は10月2日からを予定」、パイオニア公式2011年製品一覧に「2011年10月発売」を確認。
- K-Naviには2011-10-05付の実戦レビューがあり、10月5日時点での実稼働と整合するため、10月10日固定は採用しない。
- 本機は10月3日frontierより前の日付に遡及するためBACKFILL扱い。追加後もchronologicalFrontierは2011-10-03を維持する。

## payoutRateBySetting

### 当時業界記事・後年解析一致系列

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 111.0% |

- グリーンべるとは設定1 96.0%〜設定6 111.0%を掲載。
- けんのスロットシミュレーションは6設定全点 96 / 98 / 101 / 104 / 107 / 111% を掲載。
confidence: **INDUSTRY_AND_ANALYSIS_CROSSCHECKED**

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/303 | 1/504 | 1/189 |
| 2 | 1/293 | 1/474〜475 | 1/181 |
| 3 | 1/281 | 1/439〜440 | 1/172 |
| 4 | 1/268〜269 | 1/407 | 1/162 |
| 5 | 1/255 | 1/374 | 1/152 |
| 6 | 1/239 | 1/341 | 1/140〜141 |

- P-WORLDはBIG 1/303→1/239、REG 1/504→1/341を掲載。
- けんのスロットシミュレーションは設定2 REG 1/475、設定3 1/440、設定4 BIG 1/269など1刻みの差があり、丸め差として範囲保持。
- グリーンべるとは概数でBIG 1/303〜1/239、REG 1/504〜1/341、合算1/189〜1/140を掲載。
confidence: **INDUSTRY_AND_DATABASE_HIGH_WITH_MINOR_ROUNDING_CONFLICT**

## baseGamesPer50

- **約37G / 1000円（50枚）**。
- 2011-08-18グリーンべると業界記事に直接掲載。
confidence: **INDUSTRY_DIRECT**

## netIncrease

- **NOT_APPLICABLE**。ボーナスのみで出玉を増やすノーマルAタイプ。ART/AT非搭載。

## basicPayout

- BIG: **約312枚**。
- REG: **約130枚**。
- グリーンべると、P-WORLD、後年解析で一致。
confidence: **INDUSTRY_AND_DATABASE_HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- ハイビスカス点灯でボーナス確定となる完全告知ノーマルAタイプ。
- 天井なし。
- 規定ゲーム数当選モード、ART/AT/CZ、長期ゲーム数モードは確認されない。
- 87G以内のBIG連チャン時にプレミアムサウンドが流れる仕様は演出条件であり、87Gゾーン当選や内部モードとは扱わない。

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_COUNT_CEILING_OR_PERSISTENT_AT_ART_MODE_CONFIRMED / MACHINE_SPECIFIC_TRANSIENT_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。ノーマルAタイプで天井・規定G数当選・ART/AT/CZを確認しない。設定変更時のリール初期挙動、告知ランプ、一時的演出状態を直接記した本機固有資料は確定できず。

carryOverBehavior: **NO_CEILING_PROGRESS_APPLICABLE / OTHER_TRANSIENT_STATE_UNVERIFIED_AFTER_RESEARCH**。据え置きで引き継ぐゲーム数天井や長期モードは非該当。表示・一時状態の保持は直接根拠なし。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_TRANSIENT_DISPLAY_OR_REEL_STATE**。単純電源OFF→ON時のリール位置、告知ランプ、一時演出状態の保持/初期化を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH**。通常ゲーム数天井・規定G数当選を確認しない。

ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井も確認されない。

modeAfterReset: **NOT_APPLICABLE_TO_PERSISTENT_WINNING_MODE**。通常A/B等の当選モードは確認されない。

stateAfterReset: **NO_PERSISTENT_HIGH_LOW_AT_ART_STATE_CONFIRMED / TRANSIENT_DISPLAY_STATE_UNVERIFIED_AFTER_RESEARCH**。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用ボーナス優遇、短縮天井、専用当選率など公開数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。消失が客期待値へ直結する天井進捗等を確認しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`キングハナハナ-30 / キングハナハナ / KHH-30 / パイオニア / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール` を組み替え、当時業界記事、K-Navi、P-WORLD、旧解析DB、後年解析を再探索したが、2011年本機固有の設定変更判別を直接確定できず。2023年版キングハナハナや後継ハナハナのガックン情報は流用しない。

numericResetData:
- 通常ゲーム数天井: **NONE / NOT_APPLICABLE**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内ボーナス当選率/期待度: **NONE_CONFIRMED_AFTER_RESEARCH**
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **INDUSTRY_AND_DATABASE_HIGH_FOR_NO_CEILING_NORMAL_TYPE_CONTEXT / UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_SETTING_CHANGE_POWER_CYCLE_AND_RESET_DETECTION**

## conflicts

1. **導入日/市場投入日定義**
   - パイオニア公式: 2011年10月発売。
   - グリーンべると: 2011-10-02納品開始予定。
   - K-Navi内覧会: 2011年10月導入予定。
   - K-Navi実戦レビュー: 2011-10-05付で実機評価が存在。
   - 以前のhandoffに10月10日説があったが今回直接根拠を再取得できず、主日付には採用しない。
2. **ボーナス確率の丸め**
   - 設定2 REG 1/474〜475、設定3 REG 1/439〜440、設定4 BIG 1/268〜269、設定6合算1/140〜141など資料間に1刻み程度の差。平均せず範囲保持。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior for reel/display/transient state: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior for transient state: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. パイオニア公式 — パチスロ機種情報2011年
   - https://www.slot-pioneer.co.jp/products/2011.html
   - 2011年10月発売を確認。
   - reliability: **OFFICIAL**
2. グリーンべると — ハナハナシリーズ最新作が登場！
   - https://web-greenbelt.jp/00002226/
   - 2011-08-18。10月2日納品開始予定、ノーマルAタイプ、BIG約312枚、REG約130枚、設定1〜6の概略ボーナス確率/出玉率、1000円約37G。
   - reliability: **INDUSTRY**
3. K-Navi — パチスロ新機種「キングハナハナ-30」内覧会
   - https://p-kn.com/topics/exhibition/835/
   - 2011-08-18。10月導入予定、最大機械割111%。
   - reliability: **ANALYSIS_HIGH / EVENT_REPORT**
4. P-WORLD — キングハナハナ‐30「2011年」
   - https://www.p-world.co.jp/machine/database/6460
   - 5号機ノーマル/完全告知/沖スロ、BIG約312枚、REG約130枚、設定別BIG/REG。
   - reliability: **DATABASE_HIGH**
5. けんのスロットシミュレーション — キングハナハナ-30 解析情報
   - https://kenslo65536.com/kaiseki/king-hanahana-30.html
   - 5号機ノーマル、設定別出玉率、天井なし、設定別BIG/REG/合算。
   - reliability: **ANALYSIS_SINGLE_RETROSPECTIVE**
6. K-Navi — キングハナハナ-30レビュー（赤牌さん）
   - https://p-kn.com/slot/1480/review/31255/
   - 2011-10-05投稿。10月初旬時点での市場稼働を補強。
   - reliability: **USER_REVIEW_DATE_CORROBORATION_ONLY**

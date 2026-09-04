# アイムジャグラーAPEX

machineName: アイムジャグラーAPEX
manufacturer: 北電子
formalModelName: アイムジャグラーAPEX Ⅵ（後年DB表記。公式ページ本文では型式文字列未確認）
inspectionNumber: 0S1109（後年DB表記。公式ページ本文では番号未確認）
releaseDate: 2011-03-22
releaseDateStatus: EXACT_DATE_CROSSCHECKED
generation: 5号機
systemType: ノーマルAタイプ / 完全告知
coreStatus: COMPLETE_CORE_WITH_BASE_CONFLICT_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、562レコード「GETだ!BILLY」を再取得して開始。
- 開始時正本は recordCount 562 / chronologicalFrontier 2011-03-22。
- LATEST_HANDOFF指定どおり2011-03-22同日群を継続し、repo検索で本機未登録を確認。
- K-Naviはホール導入開始2011-03-22。2011年3月カレンダー上の同日パチスロはG-SPIN / GETだ!BILLY / アイムジャグラーAPEXの3機で、今回本機追加により3/22同日群を閉じる。

## payoutRateBySetting

### メーカー公式・工場データ予測値（主系列）
- 設定1: **95.85%**
- 設定2: **96.70%**
- 設定3: **98.71%**
- 設定4: **100.80%**
- 設定5: **102.80%**
- 設定6: **105.16%**

北電子公式は「工場データから算出した予測値」と明記。P-WORLD/K-Naviでも同系列を確認。
confidence: OFFICIAL_CROSSCHECKED

### 攻略側の別定義値
- 96.9 / 97.8 / 99.9 / 102.0 / 104.2 / 106.6%（すろぱちくえすと）
- 95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%（けんのスロットシミュレーション「公表値」丸め）

公式値と攻略側の理論/算出条件差があるため平均せずCONFLICT/DEFINITION_DIFFERENCEとして保持。

## initialHitBySetting

### BIG
- 設定1: **1/287.4**
- 設定2: **1/282.5**
- 設定3: **1/282.5**
- 設定4: **1/273.1**
- 設定5: **1/273.1**
- 設定6: **1/268.6**

### REG
- 設定1: **1/455.1**
- 設定2: **1/442.8**
- 設定3: **1/348.6**
- 設定4: **1/321.3**
- 設定5: **1/268.6**
- 設定6: **1/268.6**

### 合算
- 設定1: **1/176.2**
- 設定2: **1/172.5**
- 設定3: **1/156.0**
- 設定4: **1/147.6**
- 設定5: **1/135.4**
- 設定6: **1/134.3**

北電子公式、P-WORLD、K-Naviで一致。
confidence: OFFICIAL_CROSSCHECKED

## baseGamesPer50

**CONFLICT / CALCULATION_DIFFERENCE**

K-Navi自社算出:
- 設定1: **34.21G**
- 設定2: **34.21G**
- 設定3: **34.24G**
- 設定4: **34.25G**
- 設定5: **34.27G**
- 設定6: **35.59G**

すろぱちくえすと通常打ち:
- 設定1: **35.00G**
- 設定2: **35.00G**
- 設定3: **35.01G**
- 設定4: **35.01G**
- 設定5: **35.02G**
- 設定6: **36.38G**

けんのスロットシミュレーションにも別算出値（設定1-2 34.47G等）があり、取得条件/取りこぼし仮定の差が疑われる。平均せず各定義を保持。
confidence: CONFLICT_ANALYSIS_SOURCES

## netIncrease

- **NOT_APPLICABLE** — ボーナスのみで増やすノーマルタイプ。ART/AT/RT純増なし。

## basicPayout

- BIG: **純増約325枚**（336枚を超える払い出しで終了）
- REG: **純増約104枚**（98枚を超える払い出しで終了）

P-WORLDで直接確認。
confidence: INDUSTRY_DATABASE_CROSSCHECKED

## modeSpecificMinimumData

- 初代アイムジャグラーEXのDNAを継承する完全告知ノーマル機。
- 天井なし。
- 通常時の長期モード、CZ、ART/AT、有利区間は非搭載/非該当。

## resetBehavior — v0.7

settingChangeBehavior: **SETTING_CHANGE_DETECTABLE_BY_REEL_GAKKUN_IF_NOT_COUNTERMEASURED / OTHERWISE_UNVERIFIED**。攻略資料で「一回転回すなどの対策がされていなければガックン判別可能」を確認。設定変更専用の高確、モード、天井短縮等は本機構造上確認されない。

carryOverBehavior: **NO_PERSISTENT_MODE_OR_CEILING_CONFIRMED / OTHERWISE_UNVERIFIED**。天井・CZ・ART/AT・通常時モード非搭載のため、前日ゲーム数や長期状態を使う朝一狙い要素は確認されない。設定据え置きそのものの低レベルRAM挙動は断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONだけの場合の本機固有リール初期化/ガックン差を直接断定できる資料は今回確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_CEILING**。天井非搭載。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。短縮天井なし。

modeAfterReset: **NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED**。

stateAfterReset: **NO_RESET_SENSITIVE_INTERNAL_STATE_CONFIRMED / OTHERWISE_UNVERIFIED**。高確/CZ/ART等なし。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更による短縮天井、高確、CZ優遇、朝一当選率優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失等の主要不利要素なし。

resetDetection: **REEL_GAKKUN_AVAILABLE_IF_STORE_HAS_NOT_SPUN_REELS_AFTER_CHANGE**。客側変更判別としてガックン情報を確認。ただし店舗が1G回す等で対策可能。

numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_SINGLE_FOR_GAKKUN / HIGH_FOR_NO_CEILING_MODE_ART / UNVERIFIED_FOR_POWER_CYCLE**

## conflicts

- payoutRateBySetting: **CONFLICT_DEFINITION** — 北電子公式工場予測値 95.85〜105.16% と攻略側理論/実戦想定値 96.9〜106.6%等。平均化せず公式系列を主値に保持。
- baseGamesPer50: **CONFLICT_CALCULATION_ASSUMPTION** — K-Navi 34.21〜35.59G、すろぱちくえすと35.00〜36.38G、別シミュレーターにも異なる算出値。平均化しない。

## missingFields

- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時の公開朝一確率/専用数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- formalModelName / inspectionNumber: 後年DBでは「アイムジャグラーAPEX Ⅵ / 0S1109」だが、今回北電子公式本文で文字列を直接確認できず補助値扱い。

## researchNote

欠損判定前に「アイムジャグラーAPEX / アイムジャグラー APEX / APEX Ⅵ / 北電子」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 50枚 / 1000円 / コイン持ち / ベース」を組み替え、北電子公式、P-WORLD、K-Navi、攻略・シミュレーション資料、後年DBを横断。6号機アイムジャグラーEXのリセット情報は別機種のため転用していない。

## sources — 取得日 2026-09-04

1. 北電子公式「アイムジャグラーAPEX」
   - https://www.kitadenshi.co.jp/slot/imjugglerapex/
   - 設定別BB/RB/合成、工場データ予測出玉率
   - confidence: OFFICIAL
2. P-WORLD「アイムジャグラーAPEX」
   - https://www.p-world.co.jp/machine/database/6239
   - 5号機ノーマル/完全告知、設定別確率/機械割、BIG約325枚、REG約104枚
   - confidence: INDUSTRY_DATABASE
3. K-Navi「アイムジャグラーAPEX」
   - https://p-kn.com/slot/1358/
   - 2011-03-22ホール導入開始、設定別基本スペック
   - confidence: ANALYSIS_HIGH
4. K-Navi「1000円あたりのゲーム数」
   - https://p-kn.com/slot/1358/29978/
   - 設定別34.21〜35.59G/50枚（自社算出）
   - confidence: ANALYSIS_HIGH
5. すろぱちくえすと「アイムジャグラーAPEX」
   - https://www.slopachi-quest.com/article/imujagura-apex/
   - 設定別別定義機械割、通常打ち35.00〜36.38G/50枚、設定変更時ガックン判別
   - confidence: ANALYSIS_SINGLE
6. けんのスロットシミュレーション「アイムジャグラーAPEX 解析情報」
   - https://kenslo65536.com/kaiseki/juggler-im-apex.html
   - 公表値丸め、理論値、天井なし、別算出回転数
   - confidence: SECONDARY_SIMULATION
7. K-Navi 2011年3月導入カレンダー
   - https://p-kn.com/calendar/201103/
   - 2011-03-22同日群の全国一斉導入機確認
   - confidence: ANALYSIS_HIGH
8. pachinavi.net 後年整理
   - https://pachinavi.net/machines/im-juggler-apex/
   - 型式名「アイムジャグラーAPEX Ⅵ」、検定番号0S1109（補助値）
   - confidence: SECONDARY_SINGLE

## status

- recordNumber: **563**
- chronologicalFrontier: **2011-03-22**
- relayStatus: **READY_TO_CONTINUE**

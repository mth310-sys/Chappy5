# パチスロたまピー

recordNo: 1326
machineName: パチスロたまピー
machineNameVariants: たまピー / Sたまピー / パチスロ たまピー / STMPAA
manufacturer: JPS（ジェイピーエス） / 玉屋共同開発PB
formalModel: STMPAA
certificationNumber: PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH
releaseDate: 2019-12-22
releaseDateNote: 遊技通信（P-WORLD転載）が「12月22日から玉屋グループ全16店舗に導入」と明記。一方、K-Navi・1geki・パチ7等の機種DBは2019-12-23をホール導入開始日とするためCONFLICT保持。業界一次系の具体日を優先し12/22をchronological canonicalとした。
generation: 6号機
systemType: ノーマルタイプ / 完全告知 / PB機 / 2段階設定（5・6）

## payoutRateBySetting

### 小役完全獲得フル攻略時

| 設定 | 出玉率 |
|---|---:|
| 5 | 約102.0% |
| 6 | 約103.0% |

遊技通信、PiDEA、グリーンべると、K-Navi、1geki、パチマガスロマガで一致。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 5 | 約1/139（K-Navi精密値 1/139.7） |
| 6 | 約1/116（K-Navi精密値 1/116.2） |

### BIG / REG（1geki自社調査）

| 設定 | BIG | REG |
|---|---:|---:|
| 5 | 1/156 | 1/1310 |
| 6 | 1/232 | 1/232 |

業界資料は合算を約1/139・約1/116まで公表。BIG/REG個別値は1gekiの当時解析を採録し、単独系統値であることを明記する。

信頼度: INDUSTRY + ANALYSIS_HIGH_FOR_COMBINED / ANALYSIS_SINGLE_FOR_BIG_REG_SPLIT

## baseGamesPer50

- `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 「たまピー / パチスロたまピー / STMPAA / JPS / 玉屋」と「50枚 / G/50枚 / ベース / コイン持ち / 千円」を組み替え、業界記事、K-Navi、1geki、P-WORLD、パチ7、パチマガスロマガ、後年JPS回顧を横断したが比較可能な50枚ベースを固定できなかった。

信頼度: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- N/A（純ボーナス主体のノーマルタイプ。AT/ART純増なし）。

## basicPayout

- BIG BONUS: **最大獲得195枚**。
- BONUS GAME / REG: **最大獲得104枚**。
- 法規上の終了条件表記ではBIG「210枚を超える払い出しで終了」、REG/BG「105枚を超える払い出しで終了」。

グリーンべると/P-WORLDは最大獲得195枚・104枚、遊技通信/PiDEA/K-Naviは払い出し終了条件を掲載。定義を分けて保存。

信頼度: INDUSTRY + ANALYSIS_HIGH_DB

## modeSpecificMinimumData

- 天井: **非搭載**。
- 通常時は「たまピーCHANCE」ランプ点灯でボーナス確定の完全告知型。
- 告知タイミングはK-Naviで先告知25% / 後告知75%。
- 設定5はBIG偏向型、設定6はBIG/REGが均等というボーナス構成差が大きい。
- 100G以内など規定ゲーム数でのボーナス当選に楽曲変化が存在するが、これは天井・モードではなく演出条件のためresetBehaviorの朝一恩恵には含めない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_NO_PERSISTENT_CEILING_OR_MODE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 本機固有の設定変更時における初期出目、ボーナス成立状態、告知状態等の直接契約は `PUBLIC_DIRECT_SETTING_CHANGE_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 天井・周期・モードを持たない純ノーマルタイプのため、AT機のような天井再抽選/朝一モード再抽選はN/A。

信頼度: UNVERIFIED_FOR_MACHINE_SPECIFIC_DIRECT_BEHAVIOR / N-A_FOR_CEILING_MODE

### carryOverBehavior

- 据え置き時に引き継ぐ天井ゲーム数・モードは **存在しない（天井非搭載、公開モード管理なし）**。
- 成立済みボーナス等の本機固有内部状態を据え置き時にどう扱うかを明示した公開資料は `PUBLIC_DIRECT_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### powerCycleBehavior

- 純電源OFF→ONについて、天井/モードはN/A。
- 成立済みボーナス、初期出目、告知状態などの本機固有の純電断単独契約は、検索語と資料系統を変えても固定できず `PUBLIC_DIRECT_POWER_CYCLE_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### gameCounterReset

- 天井用内部ゲームカウンタ: **N/A（天井非搭載）**。
- ホール表示器等の外部データカウンタ挙動は本DBの実機内部契約対象外。

### ceilingAfterReset

- **N/A / 天井非搭載**。
- 1geki「天井/設定変更」ページ、パチ7で天井機能なしを確認。

### modeAfterReset

- **N/A / 公開モード管理なし**。
- 設定変更専用モード振り分け・朝一専用モードは再探索後も確認なし。

### stateAfterReset

- 高確/低確等の状態管理は公開ゲーム性上確認されず、設定変更専用内部状態表も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset

- **N/A**。本機は6号機の純ノーマルタイプでAT/ART非搭載。本DBで追跡する朝一有利区間契約の対象外として扱う。

### resetBenefits

- 設定変更/朝一専用の天井短縮、モード優遇、初当たり優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 100G以内のBB等で楽曲が変化する仕様は確認できるが、設定変更専用恩恵ではないため除外。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のリールガックン条件/発生率、朝一出目、ランプ状態、液晶/7セグ等を用いた設定変更・据え置きの確定判別契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- BIG/REG比率は設定5と6で大きく異なり設定推測材料にはなるが、これは朝一リセット判別ではないためresetDetectionには採用しない。

### numericResetData / publicMorningNumbers

- 設定変更専用モード振り分け: N/A / 公開値なし。
- 朝一特定G以内当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- リセット専用短縮天井: N/A（天井非搭載）。
- リセット恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に `パチスロたまピー / たまピー / Sたまピー / STMPAA / JPS / 玉屋` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 変更判別 / 50枚 / ベース` を組み替え、遊技通信、PiDEA、グリーンべると、P-WORLD、K-Navi、1geki、パチ7、パチマガスロマガ、古い解析DB、JPS回顧系まで横断。天井非搭載は複数系統で固定できたが、本機固有の設定変更・据え置き・純電断・ガックンの直接契約と50枚ベースは固定できなかったためUNVERIFIEDを残した。

## conflicts

### releaseDate
- **2019-12-22**: 遊技通信（2019-12-20記事、P-WORLD転載）が「12月22日から玉屋グループ全16店舗に導入」と明記。
- **2019-12-23**: K-Navi、1geki、パチ7、後年PB紹介が導入開始日/リリース日として掲載。
- **2019-12下旬**: JPS発表を伝えるPiDEA・グリーンべるとは「12月下旬より順次」。
- 平均化せず、具体的な当時業界記事の最初の導入日12/22をchronological canonical、12/23を機種DB上の一般的導入開始表記として保持。

### payout definition
- 業界/解析資料の102%・103%は **小役完全獲得フル攻略時**。通常打ちの市場掲載機械割を別値として固定できなかったため混同しない。

## sources

取得日: 2026-09-11

1. 遊技通信（P-WORLD業界ニュース転載） — JPSと福岡の玉屋、出玉率100％超のノーマルタイプでPBパチスロ機を共同開発
   - https://news.p-world.co.jp/articles/12457/yugitsushin
   - 2019-12-22から全16店舗導入、設定5/6、フル攻略約102/103%、合算約1/139・1/116、BB/BG払い出し終了条件
   - reliability: INDUSTRY_CONTEMPORARY
2. PiDEA X / 情報島 — JPS、玉屋と共同開発したPB機「パチスロたまピー」を発表
   - https://www.pidea.jp/articles/%EF%BD%8A%EF%BD%90%EF%BD%93%E7%8E%89%E5%B1%8B%E3%81%A8%E5%85%B1%E5%90%8C%E9%96%8B%E7%99%BA%E3%81%97%E3%81%9F%EF%BD%90%EF%BD%82%E6%A9%9F%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%9F%E3%81%BE%E3%83%94%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8
   - 型式STMPAA、6号機Aタイプ、2段階設定、フル攻略出玉率、12月下旬導入
   - reliability: INDUSTRY
3. グリーンべると — JPSが玉屋と共同制作したPB機を発表／パチスロたまピー
   - https://web-greenbelt.jp/post-27491/
   - PB背景、設定5/6、合算、BIG最大195枚/BG最大104枚、フル攻略102/103%
   - reliability: INDUSTRY
4. K-Navi — パチスロたまピー
   - https://p-kn.com/slot/3375/
   - 導入2019-12-23、合算1/139.7・1/116.2、フル攻略機械割102/103%、払い出し条件、告知比率
   - reliability: ANALYSIS_HIGH_DB
5. 1geki — パチスロ たまピー
   - https://1geki.jp/slot/s_tamapy/
   - https://1geki.jp/slot/s_tamapy/1/
   - https://1geki.jp/slot/s_tamapy/3/
   - 導入2019-12-23、BIG/REG個別値、天井非搭載
   - reliability: ANALYSIS_HIGH
6. P-WORLD — パチスロたまピー
   - https://www.p-world.co.jp/machine/database/9103
   - 6号機ノーマル、BIG最大195枚/BG104枚、PB概要
   - reliability: ANALYSIS_HIGH_DB
7. パチ7 — パチスロたまピー
   - https://pachiseven.jp/machines/5955/cutout/5
   - 導入2019-12-23、天井機能なし、ノーマル
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ — パチスロたまピー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/43/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/43/h.php
   - JPS/2019年12月、設定5/6、合算、フル攻略102/103%
   - reliability: ANALYSIS_HIGH_ARCHIVE
9. パチ7 オカイサロン — JPSの歴史/全機種レビュー
   - https://pachiseven.jp/articles/detail/11436
   - 玉屋専用PBとしての位置づけ、2段階設定・出玉率100%超の後年回顧
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- machineSpecificSettingChangeDirectContract: UNVERIFIED_AFTER_RESEARCH
- machineSpecificPowerCycleDirectContract: UNVERIFIED_AFTER_RESEARCH
- resetDetection/gakkun: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumericData: UNVERIFIED_AFTER_RESEARCH

coreStatus: PARTIAL_CORE_BASE_UNVERIFIED

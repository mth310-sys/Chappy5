# いろはに愛姫

No: 1339
machineName: いろはに愛姫
machineNameVariants: パチスロ いろはに愛姫 / いろはに愛姫（めごひめ） / 愛姫
manufacturer: パオン・ディーピー（大都技研ブランド）
releaseDate: 2020-03-02
formalModelName: Sいろはに愛姫PA5
certificationNumber: 9S1421
generation: 6号機
systemType: A+ART / リアルボーナス＋ゲーム数上乗せART / 特殊4段階設定（左・中・右・6）

## payoutRateBySetting
- 設定左 / 中 / 右: **96.8%〜104.1%**。左・中・右はボーナス等の基本性能が共通で、青7押し順の偏りを見抜く攻略度により出玉率が変動するため、固定の設定別単一値へ潰さない。
- 設定6: **106.0%**。
- 業界発表は「押し順の偏りを見抜くことで96%〜104%」と説明し、複数解析資料は左/中/右を96.8〜104.1%、設定6を106.0%として一致。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 左 | 1/268.6 | 1/385.5 | 1/158.3 |
| 中 | 1/268.6 | 1/385.5 | 1/158.3 |
| 右 | 1/268.6 | 1/385.5 | 1/158.3 |
| 6 | 1/245.5 | 1/246.4 | 1/123.0 |

- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約37G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- ART「隻眼ノ嫁」: 約0.3枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- 愛姫BONUS / ナオエ決戦BONUS（BIG）: 最大約150枚。
- いろはBONUS / ツバキBONUS（REG）: 最大約40枚。
- ART「隻眼ノ嫁」: 初期30G+α、突入時平均100G超とする解析あり。
- 通常時BIG終了後はART突入。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 設定は通常の1〜6ではなく「左・中・右・6」の4種類。
- 左/中/右ではBIG/REG確率等の基本性能は共通で、BIG・ART中の3択青7の正解押し順が設定に応じて偏る。
- 3択青7正解比率: 設定左 = 左50% / 中25% / 右25%、設定中 = 左25% / 中50% / 右25%、設定右 = 左25% / 中25% / 右50%。設定6は概ね均等とする解析あり。
- 通常時には「通常 / 優遇モード」があり、スイカ成立時に優遇モード移行抽選。比較用として設定左/中/右4.30%、設定6 8.59%が公開されているが、これは朝一専用値ではない。
- 天井機能は非搭載。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_GAPS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **有利区間RESET / 内部状態RESET**。
- 1gekiの当時解析では設定変更後の液晶は **城内ステージ**。
- 別当時解析も設定変更でモード/内部状態RESETとしており、主要契約は一致。

### carryOverBehavior
- 据え置きでは設定変更処理が行われないため、設定そのものと通常時の進行を継続する。
- 本機固有の据え置きのみを独立欄で詳述した一次/当時解析は今回固定できなかったが、純電源OFF→ONでは状態・モードを引き継ぐことが直接公開されているため、一般的な閉店電断を伴う据え置きは同契約として扱う。
- reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE / ANALYSIS_INFERRED_FOR_STANDALONE_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ON: **内部状態・モードをCARRY_OVER**。
- 液晶は **城内ステージ**へ戻る。
- 1gekiと別系統解析で内部状態引継ぎが一致。

### gameCounterReset
- ゲーム数天井: **N/A（天井非搭載）**。
- 設定変更/据え置き/純電断で比較すべき天井ゲーム数は存在しない。

### ceilingAfterReset
- **N/A / NONE**。通常時ゲーム数天井そのものが非搭載で、設定変更時の短縮天井も確認されない。

### modeAfterReset
- 設定変更: 通常時の内部モード/状態をRESET。
- 純電源OFF→ON: モードCARRY_OVER。
- 据え置き: 純電断を伴う通常営業運用ではCARRY_OVER契約として扱う。
- 設定変更専用の朝一モード振り分け数値は、機種名/型式/メーカー表記と「設定変更・リセット・朝一・モード・優遇モード・有利区間」を組み替えて再探索したが公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。
- 優遇モードは通常時スイカで移行する隠し高確相当の内部状態であり、設定変更時の内部状態RESET対象として整理。

### advantageousSectionReset
- 設定変更: **RESET**。
- 純電源OFF→ON / 据え置き: 本機固有の有利区間ランプを含む詳細な朝一契約は直接資料を十分に固定できず、内部状態/モード引継ぎ以上は推測補完しない。
- ARTは6号機有利区間規制対象だが、朝一ランプによる変更判別可否は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- ゲーム数天井非搭載のため、天井短縮恩恵なし。
- 設定変更専用の初当たり優遇、朝一専用優遇モード、専用ART当選率など比較可能な公開恩恵値は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更で前日の内部状態/優遇モードを消去するため、前日が有利な内部状態だった場合はその状態を引き継がない。
- ただし本機はゲーム数天井非搭載のため、宵越し天井進行消去という不利はない。

### resetDetection
- 設定変更時・純電源OFF→ON時とも液晶は城内ステージとする当時解析があり、**朝一ステージ単独では設定変更/据え置き判別不能**。
- 左/中/右の設定内容自体はBIG/ART中の3択青7正解偏り（50/25/25）から遊技中に推測できるが、これは朝一の「変更されたか」を即時判別するものではない。
- `いろはに愛姫 / 愛姫 / Sいろはに愛姫PA5 / 9S1421 / パオン・ディーピー / 大都技研` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / 有利区間ランプ / リセット判別` を組み替え、公式・業界記事・1geki・HAZUSE・K-Navi・パチマガスロマガ・当時攻略/後年解析を横断したが、本機固有のガックン発生条件/率、有利区間ランプによる確定的変更判別契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 天井: 非搭載。
- 設定変更専用短縮天井: NONE。
- 設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用初当たり/CZ優遇値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 参考（朝一専用ではない通常時公開値）: スイカ成立時の優遇モード移行率 = 設定左/中/右 **4.30%**、設定6 **8.59%**。
- 参考（設定推測用）: 3択青7正解比率 = 左設定 50/25/25%、中設定 25/50/25%、右設定 25/25/50%。

## resetBehavior 再探索メモ
2026-09-11に `いろはに愛姫 / いろはにめごひめ / 愛姫 / Sいろはに愛姫PA5 / 9S1421 / パオン・ディーピー / 大都技研` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 優遇モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ / リセット判別 / 城内ステージ` を組み替え、大都技研公式、グリーンべると/P-WORLD業界記事、1geki、HAZUSE、K-Navi、パチマガスロマガ、なな徹、複数当時攻略・回顧資料を横断。設定変更時の有利区間/内部状態RESET、純電断時の状態/モード引継ぎ、天井非搭載は直接資料で固定。ガックン、有利区間ランプの朝一確定判別、設定変更専用モード振り分けは十分な再探索後も固定できず推測補完していない。

## sources
取得日: 2026-09-11

1. 大都技研公式 — いろはに愛姫
   - https://www.daitogiken.com/contents/product/slot/megohime/
   - 公式製品ページ、2020-03-02設置店検索追加を確認。
   - reliability: OFFICIAL
2. P-WORLD / グリーンべると — 押し順の偏りを見抜けば、出玉率が最大104％に
   - https://news.p-world.co.jp/articles/12804/greenbelt
   - パオン・ディーピー製、大都技研試打会、2020-03-01納品開始予定、押し順偏向と96〜104%の出玉率特性を確認。
   - reliability: INDUSTRY
3. HAZUSE — いろはに愛姫
   - https://hazuse.com/machine/pachislot/9S1421/
   - 型式 `Sいろはに愛姫PA5`、検定番号 `9S1421`、2020-03-02導入、純増約0.3枚/Gを確認。
   - reliability: ANALYSIS_HIGH
4. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/9S1421/genre/201/
   - BIG/REG/合算、機械割、設定構成を照合。
   - reliability: ANALYSIS_HIGH
5. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_megohime/3/
   - 天井非搭載、設定変更時の有利区間/内部状態RESETと城内ステージ、純電源OFF→ON時の状態/モード引継ぎと城内ステージを確認。
   - reliability: ANALYSIS_HIGH
6. K-Navi — いろはに愛姫
   - https://p-kn.com/slot/3405/
   - 2020-03-02導入、BIG/REG確率等を照合。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ — いろはに愛姫
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/02/a.php
   - パオン・ディーピー/2020年3月、特殊設定・押し順偏向仕様を確認。
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ — ART「隻眼ノ嫁」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/02/03.php
   - 初期30G+α、純増約0.3枚/G、平均初期100G超を確認。
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — 優遇モード
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/02/04.php
   - スイカ成立時優遇モード移行率4.30%/8.59%、保証G数を確認。
   - reliability: ANALYSIS_HIGH
10. 1geki — 優遇モード
    - https://1geki.jp/slot/s_megohime/43/
    - 優遇モードの定義、4.30%/8.59%を別系統で照合。
    - reliability: ANALYSIS_HIGH
11. おスロおパチおいでやす — 朝一リセット
    - https://oslo-opachi.com/2020/02/22/irohani_megohime_settei/
    - 天井非搭載、設定変更時モードRESET、電源OFF→ON時モード引継ぎ、3択比率を確認。
    - reliability: ANALYSIS_SINGLE
12. スロがち.COM — リセット情報
    - https://slogati.com/irohani/
    - 設定変更で内部状態RESET、電源入切で内部状態引継ぎを照合。
    - reliability: ANALYSIS_SINGLE

## missingFields
- 本機固有ガックン発生条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一有利区間ランプによる設定変更/据え置き確定判別契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード振り分け数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用初当たり/CZ等の数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 重大な性能コアCONFLICTなし。
- 出玉率は左/中/右を固定3値として扱う資料もある一方、当時業界資料と主要解析は攻略度により96.8〜104.1%とする。本DBでは本機の特殊な設定/攻略構造を崩さないため **左/中/右 = 96.8〜104.1%のレンジ**をcanonicalとし、固定値化しない。

coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_GAPS

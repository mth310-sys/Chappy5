# 乙女魂 ～光と無月～

machineName: 乙女魂 ～光と無月～
manufacturer: 高砂電器産業
releaseDate: 2015-08-17
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: KONAMI公式系ブログが「2015年8月17日より全国のホールに登場予定」と明記し、HAZUSEも導入開始2015-08-17。後年まとめに10/5表記があるが、公式当時告知・HAZUSE・当時解析複数を優先して08-17をcanonicalとする。
generation: 5号機
systemType: ART / 擬似ボーナス連鎖型
formalModelName: 乙女魂JV
inspectionNumber: 3S0939
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **高砂電器産業（TAKASAGO）**。
- canonical導入日: **2015-08-17**。
- 型式名: **乙女魂JV**。
- 検定番号: **3S0939**。
- confidence: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割/PAYOUT |
|---:|---:|
| 1 | 96.2% |
| 2 | 97.5% |
| 3 | 99.9% |
| 4 | 102.3% |
| 5 | 109.3% |
| 6 | 110.8% |

- パチマガスロマガはメーカー発表値として掲載。HAZUSE、当時解析でもほぼ一致。
- ちょんぼりすたの設定2のみ97.3%表記があるため、メーカー発表値97.5%をcanonicalとし丸め/転記差としてconflictsへ保持。
- confidence: ANALYSIS_HIGH_WITH_MANUFACTURER_PUBLISHED_VALUES

## initialHitBySetting

メーカー発表系ボーナス確率:

| 設定 | ボーナス | スケバンバトル(CZ) |
|---:|---:|---:|
| 1 | 1/254.2 | 1/173.8 |
| 2 | 1/244.6 | 1/164.8 |
| 3 | 1/234.0 | 1/156.5 |
| 4 | 1/218.1 | 1/146.8 |
| 5 | 1/205.4 | 1/140.0 |
| 6 | 1/200.0 | 1/135.6 |

- パチマガスロマガが「メーカー発表値」として掲載し、HAZUSEも同値。
- 一方、当時二次資料には「ボーナス初当り」1/307.6 / 295.6 / 283.3 / 263.7 / 250.0 / 243.5という別系列が存在する。定義差を安全に特定できないため平均・統合せずCONFLICTとして保持。
- confidence: CONFLICT_ON_BONUS_INITIAL_HIT_DEFINITION; canonical table = manufacturer-published series.

## baseGamesPer50

- **約31G/50枚**。
- HAZUSE、ちょんぼりすたで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 擬似ボーナスART純増: **約2.0枚/G**。
- パチマガスロマガ、当時解析、実機販売資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 「光ボーナス」「無月ボーナス」は擬似ボーナスART。
- 基本構成: **小役ゲーム30G + JACゲーム8G×3 = 最低54G**。
- JAC上乗せ・ボーナスストックあり。物差し用途では詳細内部抽選を収集しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 自力CZ「スケバンバトル」突入率: 設定1 1/173.8 ～ 設定6 1/135.6。
- スケバンバトル勝率: **約41%**。
- かちこみゾーンは最低10G、鳳凰チャンスはボーナス期待度約60%。
- 通常天井は二系統:
  1. **スケバンバトル&ボーナス間777G** → ボーナス当選。
  2. **ボーナス間1200G** → ボーナス当選。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_RESET_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機固有の設定変更時について、「777GのSB&ボーナス間カウンタ」「1200Gのボーナス間カウンタ」「高確/かちこみ等の内部状態」がRESETか再抽選かを直接明示する十分な当時資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機ART機の挙動、同メーカー他機、後継機から推定補完しない。

### carryOverBehavior

- 設定据え置き時に上記2系統の天井カウンタ、高確/内部状態、CZ進捗をどこまで引き継ぐか、本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井値そのものの存在確認と、営業日跨ぎの持越し契約は分離する。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ONについて、777G/1200G各カウンタ・内部状態・表示の扱いを明示する本機固有資料を十分固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電断を自動で同義扱いしない。

### gameCounterReset

- 通常時にはSB&ボーナス間777G、およびボーナス間1200Gの二つの天井条件が存在。
- 設定変更時に各カウンタがRESETか引継ぎか: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井: **777G（SB&ボーナス間） / 1200G（ボーナス間）**。
- 設定変更専用の短縮天井・別天井値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- これは「通常天井が設定変更後も同条件で進行する」と断定するものではない。

### modeAfterReset

- 規定G解除型の天国/通常A/B等の公開モードテーブルは性能コア上確認対象構造として明確ではない。
- 朝一専用モード、設定変更時のモード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 通常時に高確示唆ステージ（体育館/校舎裏等）やCZ高確構造は存在するが、設定変更時の状態再抽選・振り分けを直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の短縮天井、朝一CZ優遇、朝一高確移行率など比較可能な恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更によって前日天井進捗/内部状態が失われるか自体が未固定のため、主要不利要素: **UNVERIFIED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ、データ表示による設定変更・据え置き判別契約を、機種名・型式・メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン」を組み替えて再探索したが、直接資料を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の高確/CZ優遇率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

1. `CONFLICT_BONUS_INITIAL_HIT_DEFINITION`
   - メーカー発表系: 1/254.2 ～ 1/200.0。
   - 当時二次資料「ボーナス初当り」: 1/307.6 ～ 1/243.5。
   - 定義差を安全に特定できないため両系列を保持し、canonical性能表はメーカー発表系を優先。
2. `CONFLICT_MINOR_PAYOUT_SETTING2`
   - メーカー発表/HAZUSE: 97.5%。
   - ちょんぼりすた: 97.3%。
3. `CONFLICT_RELEASE_DATE_LATE_SECONDARY`
   - KONAMI公式当時告知・HAZUSE・当時解析: 2015-08-17。
   - ちょんぼりすた本文内の表に2015-10-05表記があるが、同記事タイトル/本文冒頭自体は08-17。内部矛盾を含むため10-05は採用しない。

## missingFields

- 設定変更時の777G/1200G各天井カウンタ処理: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の各カウンタ・内部状態持越し: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時内部状態/朝一専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. KONAMI公式系「こちらマジハロ情報局★」2015-07-28 — https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150728.html
   - TAKASAGOオリジナル機、2015-08-17全国ホール登場予定を確認。
2. KONAMI公式系「こちらマジハロ情報局★」2015-08-25 — https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150825.html
   - 全国ホール稼働開始済みを確認。
3. HAZUSE「乙女魂 ～光と無月～」 — https://hazuse.com/machine/pachislot/SX0054/
   - 型式乙女魂JV、検定3S0939、導入2015-08-17、ボーナス/CZ、機械割、約31G/50枚、ART基本構造を確認。
4. パチマガスロマガ「乙女魂～光と無月～」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/a.php
   - ART、純増約2.0枚/G、基本ゲームフローを確認。
5. パチマガスロマガ「ボーナス確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/h.php
   - メーカー発表値のボーナス、スケバンバトル、PAYOUTを確認。
6. パチマガスロマガ「ART突入フロー」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/l.php
   - 擬似ボーナス純増約2.0枚/G、30G+α小役ゲームと3回JAC構成を確認。
7. すろぱちくえすと「天井恩恵・狙い目・ヤメ時解析」 — https://www.slopachi-quest.com/article/otome-soul/
   - 777G/1200Gの二系統天井、天井恩恵を確認。
8. ちょんぼりすた「乙女魂」 — https://chonborista.com/slot/takasago-slot/11303/
   - 約31G/50枚、純増約2.0枚、天井構造、主要スペックを照合。導入日表内部の10/5は公式・当時複数と不一致のため非採用。
9. P-Summa「乙女魂PV」2015-07-18 — https://psumma.jp/pachislo/13361/
   - 別系列「ボーナス初当り」1/307.6～1/243.5、純増約2.0枚、1200G天井を確認。定義差CONFLICTとして保持。
10. 中一商事 実機資料 — https://www.nakaiti.com/html/sTakasago098.html
   - 型式乙女魂JV、ART、ボーナス/CZ確率、最低54G・純増2.0枚/Gを照合。

## researchNotes

- resetBehavior再探索では「乙女魂 ～光と無月～ / 乙女魂 / 乙女魂JV / 高砂 / TAKASAGO」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 777G / 1200G / 高確 / ガックン」を組み替えた。
- メーカー公式系、HAZUSE、パチマガスロマガ、当時攻略、後年回顧/実機資料を横断したが、営業日跨ぎの設定変更・据え置き・純電断契約を明示する本機固有資料は今回固定できなかった。
- 二系統天井が存在するため、将来のQAでは各カウンタを分けて再探索する。
- 他の高砂機、スカイガールズ等のresetBehaviorは流用しない。

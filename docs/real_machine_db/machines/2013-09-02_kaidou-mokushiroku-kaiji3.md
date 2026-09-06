# 回胴黙示録カイジ3

machineName: 回胴黙示録カイジ3
manufacturer: ロデオ（製造元: 株式会社銀座）
releaseDate: 2013-09-02
releaseDatePrecision: exact_day_multi_source
generation: 5号機
systemType: AT / ゲーム数解除 + 自力CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- ホール導入開始: **2013-09-02**。K-Navi、2-9伝説、後年機種DBで一致。
- 当時グリーンべると系記事は **2013-09-01から納品開始予定** とするため、納品開始予定日とホール導入開始日の定義差を分離して保持する。
- ブランド/販売上のメーカー表記は **ロデオ**、製造元は **株式会社銀座**。フィールズ系資料でも2013年9月ホール設置予定を確認。
- 型式名: **カイジ3S**。検定番号: **3S0271**（後年機種DB補助）。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

### 市場・解析掲載系列

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.7% |
| 3 | 100.6% |
| 4 | 103.0% |
| 5 | 107.3% |
| 6 | 112.4% |

- 2-9伝説、pacnk、CrankySeven、Pachinaviで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### 別シミュレート系列

| 設定 | シミュレート機械割 |
|---|---:|
| 1 | 96.6% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 102.4% |
| 5 | 106.8% |
| 6 | 111.8% |

- 当時系個人解析資料が「シミュレート値」と明記。
- 上記市場掲載系列と平均せず `CONFLICT_PAYOUT_PUBLISHED_ANALYSIS_VS_SIMULATED_SERIES` として保持。
- confidence: ANALYSIS_SINGLE_SIMULATION

## initialHitBySetting

### AT「黙示録モード」初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/299.1 |
| 2 | 1/285.7 |
| 3 | 1/270.3 |
| 4 | 1/256.0 |
| 5 | 1/227.0 |
| 6 | 1/197.1 |

- 2-9伝説、pacnk、CrankySeven、Pachinaviで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約28G/50枚**。CrankySevenが「1000円あたり約28G」と掲載。
- 中古実機整理資料には **約30G/1000円** の掲載があるため、約28Gを主値、約30Gを丸め/資料差として保持する。
- `CONFLICT_BASE_28G_VS_APPROX_30G`。平均しない。
- confidence: ANALYSIS_SINGLE_DIRECT + RETROSPECTIVE_SECONDARY_CONFLICT

## netIncrease

- AT「黙示録モード」: **初期30〜300G / 純増約2.6枚/G / 継続率50〜89%**。
- 当時グリーンべると系記事、K-Navi、パチマガスロマガ、複数解析資料で一致。
- ATはゲーム数上乗せ + 継続率管理。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 擬似ボーナス非搭載の **AT特化タイプ**。
- 基本AT性能: **30〜300G × 約2.6枚/G**。2セット目以降の基礎ゲーム数について一部資料に20〜300G表記があるが、物差し用途では初当たり時の基本30〜300Gを主値とする。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定G数に関わる **通常A / 通常B / チャンス / 天国** の4モード。
- 通常A: 規定G数最大900G、最大前兆40G込み表記では最大940G。
- 通常B: 規定G数最大850G。資料に前兆込み865G / 890G表記差があるため、規定G数の主値は850Gとし、前兆込み表示はCONFLICTとして別管理。
- チャンス: 規定G数最大250G、前兆込み最大265G。
- 天国: 規定G数最大100G、前兆込み最大140G。
- AT間最大天井は **900G + 最大40G前兆**。
- 通常時にはテーブルモードと別に、レア役出現率に関係する **低確 / 高確 / 超高確** のサブ状態が存在。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_COUNTER_CLEAR_AND_MORNING_MODE_NUMBERS_CONFIRMED__CARRYOVER_POWER_CYCLE_STATE_DETECTION_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 複数解析資料で、**設定変更時はAT間天井までのゲーム数をクリア**することを確認。
- CrankySevenでは設定変更時に **20%でチャンスモード、10〜15%で天国モードスタート** と掲載。
- 設定変更時の通常A/通常Bを含む全4モード完全振り分け、低確/高確/超高確の初期振り分けは、機種名・型式・「朝一 / 設定変更 / リセット / モード / 状態」等を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時のAT間天井G、テーブルモード、低確/高確/超高確状態について、本機固有の直接契約を確定できる資料は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時クリアから据え置き保持を逆算しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** のAT間G数、テーブルモード、サブ状態、液晶状態の扱いは、検索語を「電源OFF ON / 電断 / 据え置き / 朝一 / 再起動」へ変えて横断したが **UNVERIFIED_AFTER_RESEARCH**。
- 2025年スマスロ「回胴黙示録カイジ 狂宴」の電断仕様は別機種のため流用しない。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_MULTI_ANALYSIS_SOURCE**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常Aの規定G数最大: **900G**（最大前兆40G込み最大940G）。
- 設定変更で前日の天井進捗をクリア。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一はモード再振り分けによりチャンス/天国選択時に実質的な早期当選期待が上がるが、固定短縮天井とは分離する。

### modeAfterReset

- 設定変更時: **チャンスモード20% / 天国モード10〜15%** を公開数値として確認。
- 通常A/通常Bを含む残余振り分けの完全表は **UNVERIFIED_AFTER_RESEARCH**。
- 通常時4モード: 通常A / 通常B / チャンス / 天国。

### stateAfterReset

- 通常時には低確 / 高確 / 超高確の3状態が存在する。
- 設定変更時の初期状態振り分け、据え置き/電断時の状態引継ぎは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時は **20%でチャンスモード（規定G最大250G）**、**10〜15%で天国モード（規定G最大100G）** スタート。
- したがって朝一は少なくとも **30〜35%がチャンス以上**という公開情報になる。ただし10〜15%が設定差を含む幅か資料丸めかを今回の残存資料から完全確定できないため、幅のまま保持。
- 設定変更専用CZ直撃や固定短縮天井などは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日AT間ハマリG数は設定変更時にクリアされるため、宵越し天井狙いには不利。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶初期ステージ、ランプ等による設定変更/据え置き判別は、複数検索語と当時解析・旧DB・回顧資料を横断後も **UNVERIFIED_AFTER_RESEARCH**。
- ゲーム数ゾーン挙動からモードを推測する一般的立ち回り情報は存在するが、朝一の設定変更確定判別とは扱わない。

### publicMorningNumbers

- 設定変更時チャンスモード: **20%**。
- 設定変更時天国モード: **10〜15%**。
- 設定変更時チャンス以上合計: **30〜35%**（上記公開値の単純合計。独立振り分けとして同一資料に掲載）。
- チャンスモード規定G最大: **250G**（最大前兆込み265G）。
- 天国モード規定G最大: **100G**（最大前兆込み140G）。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- payout: 主系列 **97.1 / 98.7 / 100.6 / 103.0 / 107.3 / 112.4%** と、シミュレート系列 **96.6 / 98.0 / 100.0 / 102.4 / 106.8 / 111.8%** が存在。平均せず保持。
- base: **約28G/50枚** と **約30G/50枚** の資料差。平均しない。
- 天井表現: 規定G数は通常A 900 / 通常B 850 / チャンス250 / 天国100G。一方、最大前兆込みの表現は通常A940 / 通常B865または890 / チャンス265 / 天国140Gなど資料差がある。規定G数と前兆込み表示を同一値として混ぜない。
- release date: ホール導入開始 **2013-09-02** と当時業界記事の「9月1日より納品開始予定」は定義差として保持。
- 2025年「回胴黙示録カイジ 狂宴」、2018年「回胴黙示録カイジ4」、パチンコ「CR弾球黙示録カイジ3」を混入させない。

## sources

取得日: **2026-09-06**

1. K-Navi「回胴黙示録カイジ3」
   - https://p-kn.com/slot/1905/
   - ホール導入開始2013-09-02、ロデオ、AT、純増約2.6枚/G、初期30〜300G、継続率50〜89%。
   - confidence: ANALYSIS_HIGH

2. グリーンべると記事転載系「カイジ第3弾は全面液晶にタッチパネル機能」
   - https://p-mans.blogspot.com/2013/07/
   - 2013-07-30掲載。ロデオ、総発売元フィールズ、製造元銀座、純増約2.6枚/G、初期30〜300G、継続率50〜89%、9月1日納品開始予定。
   - confidence: INDUSTRY_REPRINT

3. パチマガスロマガ「回胴黙示録 カイジ3」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/62/a.php
   - AT初期30〜300G、継続率50〜89%、AT構造。
   - confidence: ANALYSIS_HIGH

4. 2-9伝説「回胴黙示録カイジ3」
   - https://29den.com/kaiji3/
   - 2013-09-02、AT初当たり、機械割97.1〜112.4%、通常A/B/チャンス/天国の最大規定G、設定変更時天井Gリセット。
   - confidence: ANALYSIS_HIGH

5. CrankySeven「回胴黙示録カイジ3」
   - https://crankyseven.com/kaiji-three-pc.htm
   - 約28G/1000円、AT初当たり、機械割、通常4モード、規定G/前兆込み天井、設定変更で天井Gクリア、設定変更時チャンス20%・天国10〜15%。
   - confidence: ANALYSIS_HIGH_RETROSPECTIVE

6. pacnk「回胴黙示録カイジ3」
   - https://pacnk.com/slot/2013/kaiji3/top.php
   - 機械割、AT初当たり、通常テーブルモードとは別の低確/高確/超高確状態。
   - confidence: ANALYSIS_HIGH

7. Pachinavi「回胴黙示録カイジ3」
   - https://pachinavi.net/machines/kaiji-3/
   - 型式カイジ3S、検定3S0271、ロデオ/製造元銀座、2013-09-02、機械割・AT初当たり。
   - confidence: ANALYSIS_RETROSPECTIVE

8. スロット価格.com「ロデオ 回胴黙示録カイジ3実機」
   - https://slot-kakaku.com/%E5%9B%9E%E8%83%B4%E9%BB%99%E7%A4%BA%E9%8C%B2%E3%82%AB%E3%82%A4%E3%82%B83/
   - 約30G/1000円、AT30〜300G、純増約2.6枚/G、AT初当たり・機械割の主系列。
   - confidence: RETROSPECTIVE_SECONDARY

9. 当時系個人解析「どりの投資日記 回胴黙示録カイジ3」
   - https://dream777star.blog47.fc2.com/blog-entry-2508.html
   - シミュレート機械割96.6〜111.8%、AT純増約2.6枚/G、天井900G+最大40G前兆。
   - confidence: ANALYSIS_SINGLE_SIMULATION

10. サミーネットワークス PR TIMES
    - https://prtimes.jp/main/html/rd/p/000000104.000002703.html
    - 2013-09-02発表、2013年9月ホール導入、製造元銀座の回胴黙示録カイジ3。
    - confidence: OFFICIAL_CORPORATE

## missingFields

- 純据え置き時のAT間ゲーム数・モード・低高確状態の直接契約。
- 設定変更を伴わない電源OFF→ON時の内部G数・モード・状態・液晶挙動。
- 設定変更時の通常A/Bを含む全4モード完全振り分け。
- 設定変更時の低確/高確/超高確初期振り分け。
- 本機固有ガックン/初期出目/液晶等の確定的変更判別。

## confidenceSummary

- identity/release: **INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE**
- payout/AT initial hit: **ANALYSIS_HIGH_MULTI_SOURCE**
- base: **CONFLICT_ANALYSIS_28G_VS_RETROSPECTIVE_30G**
- AT core: **INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE**
- reset counter clear: **ANALYSIS_HIGH_MULTI_SOURCE**
- reset morning mode numbers: **ANALYSIS_SINGLE_DIRECT_WITH_MULTI_SOURCE_MODE_STRUCTURE_SUPPORT**
- carry-over/power-cycle/state/detection: **UNVERIFIED_AFTER_RESEARCH**

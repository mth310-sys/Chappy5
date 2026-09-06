# ヱヴァンゲリヲン～決意の刻～

machineName: ヱヴァンゲリヲン～決意の刻～
aliases: エヴァンゲリオン 決意の刻 / エヴァ決意 / ヱヴァ決意
manufacturer: ビスティ / Bisty
releaseDate: 2014-02-10
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: ノーマルタイプ / ボーナス+無限RT / 技術介入
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- SANKYOオンライン博物館でブランド **ビスティ**、導入年月 **2014.02** を確認。
- K-Navi / Pachiseven / ALL7でホール導入日 **2014-02-10** を確認。
- パチスロ「ヱヴァ」シリーズ第8弾。BIG/REG主体のノーマルタイプに、BIG間天井などから入る無限RT「暴走モード」を搭載。
- 型式名/検定番号は今回、公式・業界・当時解析・古いDB・表記揺れ検索を行ったが直接値を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.6% |
| 2 | 98.8% |
| 3 | 100.1% |
| 4 | 104.0% |
| 5 | 109.6% |
| 6 | 114.1% |

- パチマガスロマガ、当時新台資料、後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/234.1 |
| 2 | 1/227.6 |
| 3 | 1/224.4 |
| 4 | 1/204.8 |
| 5 | 1/192.8 |
| 6 | 1/176.2 |

### REG

| 設定 | 確率 |
|---|---:|
| 1 | 1/489.1 |
| 2 | 1/474.9 |
| 3 | 1/468.1 |
| 4 | 1/425.6 |
| 5 | 1/399.6 |
| 6 | 1/364.1 |

### ボーナス合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/158.3 |
| 2 | 1/153.8 |
| 3 | 1/151.7 |
| 4 | 1/138.3 |
| 5 | 1/130.0 |
| 6 | 1/118.7 |

- パチマガスロマガとP-WORLDでBIG/REGを照合。合成はパチマガスロマガ値。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約36～39G/1000円（50枚換算）**。
- パチマガスロマガの機種概要で直接確認。設定差を含むレンジ表記であり、単一固定値には丸めない。
- confidence: ANALYSIS_HIGH

## netIncrease

- RT「暴走モード」: **約0.2枚/G**。
- P-WORLDで確認。
- confidence: ANALYSIS_HIGH

## basicPayout

- SUPER BIG BONUS: **最大311枚**。
- BIG BONUS: **最大207枚**。
- REGULAR BONUS: **最大104枚**。
- K-Navi / P-WORLD / パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時にAT/ART型の通常モード管理は確認されず、本DBのresetBehaviorで保持すべき朝一モード振り分けは **NOT_APPLICABLE_CONFIRMED_SYSTEM_TYPE**。
- RT「暴走モード」は次回BIGまで継続し、REG当選では終了せず覚醒モードとしてRT継続。

## ceiling

- **BIG間777G**でRT「暴走モード」へ突入し、次回BIGまで継続。
- REGを挟んでもBIG間ゲーム数として天井を追う。
- SANKYO公式博物館、P-WORLD、必勝本、当時解析で一致。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CARRYOVER_CONFIRMED__POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更を行っても **BIG間ハマリゲーム数を引き継ぐ** とする本機専用解析を複数系統で確認。
- 当時攻略資料では **RT状態も設定変更でリセットされない** と明記。
- したがって、一般的な「設定変更=天井Gクリア」という5号機AT/ART機の挙動を本機へ流用しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_GAME_COUNT_AND_RT

### carryOverBehavior

- **宵越し天井可能**をK-Navi実戦記事、必勝本、当時天井解析で複数確認。
- BIG間ハマリG数は前日分を含めて継続利用できる。
- RT状態で閉店した場合も設定変更でRT状態を消さないとする当時資料あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ONについて、設定変更と区別した直接比較表は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 宵越し可能・設定変更でもG数/RT保持という資料からの推測で埋めない。
- confidence: UNVERIFIED

### gameCounterReset

- 設定変更時: **CARRY_OVER_CONFIRMED**。
- 宵越し/据え置き: **CARRY_OVER_CONFIRMED**。
- 天井基準はBIG間777G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- 設定変更による固定短縮天井: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 設定変更後も前日までのBIG間ゲーム数を引き継ぐため、リセット専用天井を新たにセットする仕様ではない。
- confidence: ANALYSIS_HIGH_FOR_CARRYOVER

### modeAfterReset

- AT/ART機のような通常モード再抽選は **NOT_APPLICABLE_CONFIRMED_SYSTEM_TYPE**。
- RT状態は設定変更でも保持とする当時解析あり。

### stateAfterReset

- 高確/低確等の朝一内部状態振り分けは本機の主要仕様として確認されず **NOT_APPLICABLE_CONFIRMED_SYSTEM_TYPE**。
- ボーナス内部成立状態等の完全再現用契約は本DB対象外。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後もBIG間天井進捗を失わないため、前日ハマリ台は **宵越し天井狙い可能**。
- 設定変更後もRT状態を保持するとする当時資料があり、設定変更自体によるRT消去回避が本機固有の重要挙動。
- リセット専用当選率・短縮G数などの公開朝一恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更に伴う天井Gクリアはなし。
- 設定変更専用の主要不利要素は、表記揺れ・メーカー名・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/RT」を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン・初期出目・朝一ステージ等による確定変更判別は十分な再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- BIG間G数やRT状態が設定変更でも保持されるため、それらだけで設定変更/据え置きを区別できない。
- confidence: UNVERIFIED_FOR_DIRECT_DETECTION

### publicMorningNumbers

- 設定変更時モード振り分け: **NOT_APPLICABLE**。
- リセット専用短縮天井: **なし（前日BIG間G数を引継ぎ）**。
- リセット専用初当たり/CZ数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields

- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なしの電源OFF→ONを設定変更と明示的に比較する直接資料は **UNVERIFIED_AFTER_RESEARCH**。
- resetDetection: 本機固有の確定変更判別要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 天井は「通常時777G」表記の資料と「BIG間777G」表記の資料がある。機構上はBIG後/通常時BIG間777Gで暴走RTへ入り、REGでは天井進捗とRTが終わらないため、本レコードは **BIG間777G** を採用。
- RT純増についてP-WORLDは約0.2枚/G。当時実戦回顧には0.4枚想定や実測0.1枚未満といった記述もあるが、実戦値/体感値は解析仕様値と混ぜず採用しない。
- 「設定変更でもG数・RT状態を保持」は当時複数資料で一致するため、一般的5号機のリセット挙動から逆推定して上書きしない。

## sources

取得日: 2026-09-06

1. SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/880/
2. K-Navi: https://p-kn.com/slot/1998/
3. Pachiseven 通常時解析: https://pachiseven.jp/machines/3079/cutout/94
4. ALL7 2014年2月導入一覧: https://www.all7.jp/plans/index/2014/02
5. パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/26/a.php
6. パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/26/h.php
7. P-WORLD: https://www.p-world.co.jp/machine/database/7305
8. 必勝本 狙いドコロ: https://p.hisshobon.jp/machine/2342/1/46651
9. 2-9伝説 天井解析（2014-02-09）: https://2-9densetsu.com/evangelionketsuinotoki/
10. メタボ教授 当時解析（2014-02-17）: https://metabopro.com/ebahaiena/
11. けんのスロットシミュレーション解析: https://kenslo65536.com/kaiseki/eva-ketui.html

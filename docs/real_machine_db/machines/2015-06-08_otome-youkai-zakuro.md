# パチスロ おとめ妖怪ざくろ

machineName: パチスロ おとめ妖怪ざくろ
manufacturer: 北電子
releaseDate: 2015-06-08
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: K-Naviおよび2015年導入新台DBで2015-06-08ホール導入開始が一致。業界一次記事は納品開始予定2015-06-07のため、納品日とホール導入日を分離。
generation: 5号機
systemType: ART / ゲーム数管理 / ゲーム数短縮（ざくろシステム）
modelName: おとめ妖怪ざくろKD
inspectionNumber: 4S0487
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 99.1% |
| 3 | 100.8% |
| 4 | 103.0% |
| 5 | 105.7% |
| 6 | 110.5% |

- パチマガスロマガはメーカー発表値として掲載。P-WORLDでも同値。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / MANUFACTURER_PUBLISHED_VALUE_RELAYED

## initialHitBySetting

ART「妖々RUSH」初当たり:

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/239 |
| 2 | 1/240 |
| 3 | 1/228 |
| 4 | 1/220 |
| 5 | 1/210 |
| 6 | 1/192 |

- パチマガスロマガはメーカー発表値として掲載。P-WORLD、複数解析でも一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / MANUFACTURER_PUBLISHED_VALUE_RELAYED

## baseGamesPer50

- **約32G/50枚**。
- 期待値見える化の基本スペック計算前提値として確認。今回、北電子公式/当時一次資料の直接表記は固定できなかったため単一解析系の比較値として保持。
- confidence: ANALYSIS_SINGLE

## netIncrease

- ART「妖々RUSH」「妖々RUSH・鬼」純増 **約2.2枚/G**。
- 北電子発表記事、北電子公式製品説明、K-Navi、P-WORLD、パチマガスロマガで整合。
- confidence: OFFICIAL_AND_INDUSTRY_MULTI_SOURCE

## basicPayout

- 初当たりART「妖々RUSH」: **30G～300G**。初期G数は開始時「阿吽挑戦」で決定。
- 上位ART「妖々RUSH・鬼」: **1セット50G+α**、ゲーム数上乗せ+セットストック型。
- パチマガスロマガ実戦値の妖々RUSH平均初期G数は48.60Gだが、メーカー固定値ではないため補助値扱い。

## modeSpecificMinimumData

- 通常時はゲーム数テーブル方式でARTを管理し、レア役等で「当たりにくい通常区間」のゲーム数だけを短縮する「ざくろシステム」を搭載。
- 解析上のモードは通常A / 通常B / 天国 / ざくろ。
- 通常A・B: 最大 **1280G+前兆**。
- 天国: **128G以内**。
- ざくろ: **396G**、当選後は次回天国濃厚とされる。
- 最大天井はART間1280G+前兆（解析では前兆最大8G表記あり）。ゲーム数短縮があるためデータカウンターG数と内部/液晶進行を同一視しない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_POWER_CYCLE_UNVERIFIED_AND_DISPLAY_DETECTION_CAVEAT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数をリセット**。
- 内部モードは引継ぎではなく朝一用に再抽選され、当時解析で **天国移行25%** が確認される。
- 液晶上のART回数/遊技G数は通常リセットされるとする当時攻略資料あり。
- 通常A/B等を含む設定変更時の完全なモード振り分けは今回固定できず、天国25%以外は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 設定変更なし据え置きでは **天井ゲーム数を引き継ぐ**とする複数当時攻略資料あり。
- **内部モードを引き継ぐ**とする当時解析あり。
- 通常運用では液晶上のART回数/遊技G数も引き継ぐ挙動が複数実戦資料で確認される。
- ただしホール側操作で設定据え置きのまま液晶遊技履歴を消せるとの当時追記情報があるため、液晶0Gを内部リセット確定とは扱わない。

### powerCycleBehavior

- 「純粋な電源OFF→ONのみ（設定変更なし）」について、内部天井G・モード・液晶履歴の三者を明示して分離した本機固有の高信頼資料を今回固定できず **`UNVERIFIED_AFTER_RESEARCH`**。
- 据え置き資料から自動的に純電断と同義推定はしない。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **CARRY_OVER_CONFIRMED**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 液晶表示G数と内部天井進捗は分離して扱う。

### ceilingAfterReset

- 設定変更後も最大天井体系は通常A/Bの **1280G+前兆**。リセット専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更時は天国へ25%で移行するため、その場合は128G以内が天井となる。これは「固定リセット天井128G」ではなくモード再抽選恩恵。

### modeAfterReset

- 設定変更時: **RESELECTED**。
- 公開数値: **天国移行25%**。
- 据え置き: **CARRY_OVER_CONFIRMED**。
- 通常A/B/ざくろを含む残り75%の詳細振り分けは、表記揺れ・型式名・メーカー名・リセット/朝一/モード移行で再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- モード以外の通常内部状態（高確/前兆/CZ状態等）について、設定変更・据え置き・純電断を分離した比較可能な本機固有契約を今回固定できず **`UNVERIFIED_AFTER_RESEARCH`**。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 最大の公開朝一恩恵は **設定変更後25%で天国モード移行**。
- 天国選択時は128G以内にART当選。
- 当時攻略では設定変更後0～128Gを朝一狙い区間として扱う資料あり。

### resetPenalties

- 設定変更により前日の天井ゲーム数進捗と内部モードを失うため、前日深くハマった台や有利モード滞在台では据え置きより不利になり得る。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 通常の据え置きでは液晶のART回数・遊技G数が残り、設定変更ではリセットされるとする当時資料があるため、朝一表示は主要判別材料。
- ただし **設定据え置きでも液晶遊技履歴をリセットできる**との当時追記があり、液晶0Gだけで設定変更確定とはできない。`DISPLAY_RESET_CAN_BE_FAKED_WITHOUT_SETTING_CHANGE` として注意。
- ガックンについては、機種名/型式/北電子/朝一リール/設定変更判別の検索語を変更して再探索しても本機固有の確定契約を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- resetTengokuModeRate: **25%**。
- resetTengokuCeiling: **128G以内**。
- normalAorBMaximumCeiling: **1280G+前兆**。
- zakuroModeCeiling: **396G / 次回天国濃厚**。
- fullResetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificFixedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。

## source / definition control

- 業界記事の2015-06-07は納品開始予定、K-Navi等の2015-06-08はホール導入開始として分離し、canonicalは2015-06-08。
- 最大1280Gは液晶上/内部進行のゲーム数管理。ざくろシステムでゲーム数短縮が入るため、データカウンター上の消化G数と必ずしも一致しない。
- 「設定変更後25%で天国」と「設定変更後128G以内の実戦当選率」は別定義。後者は通常モードの128G内振り分け等を含み得るため同一値として混ぜない。
- 据え置き時に液晶履歴が残るのは有力な判別材料だが、履歴消去対策が可能との当時情報があるため確定判別に格上げしない。

## sources

取得日: 2026-09-07

1. 北電子 公式製品情報 — https://www.kitadenshi.co.jp/slot/otomeyoukaizakuro/
   - ざくろシステム、ART構造。
   - confidence: OFFICIAL
2. 北電子 最新情報 — https://www.kitadenshi.co.jp/funnews/slot/page/8/
   - 2015-03-17特設サイト公開の公式履歴。
   - confidence: OFFICIAL
3. グリーンべると — https://web-greenbelt.jp/00007701/
   - 2015-03-25内覧会、2015-06-07納品開始予定、純増約2.2枚/G、ゲーム数管理/短縮構造。
   - confidence: INDUSTRY
4. 娯楽産業 — https://www.goraku-sangyo.com/%E5%8C%97%E9%9B%BB%E5%AD%90%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%81%8A%E3%81%A8%E3%82%81%E5%A6%96%E6%80%AA%E3%81%96%E3%81%8F%E3%82%8D%E3%80%8D%E7%99%BA/
   - ART30～300G、鬼50G+α、純増約2.2枚/G。
   - confidence: INDUSTRY
5. K-Navi — https://p-kn.com/slot/2250/
   - 2015-06-08ホール導入開始、ART構造、純増。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
6. P-WORLD — https://www.p-world.co.jp/machine/database/7692
   - 型式おとめ妖怪ざくろKD、検定4S0487、設定別ART初当たり/機械割、純増、基本ART性能。
   - confidence: ANALYSIS_HIGH_DATABASE
7. パチマガスロマガ ボーナス確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/95/h.php
   - メーカー発表値としてART初当たり1/239～1/192、PAYOUT97.4～110.5%。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
8. パチマガスロマガ ざくろシステム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/95/art01.php
   - 通常A/B最大1280G、天国128G、ざくろ396G、設定変更後天国約25%。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
9. 期待値見える化 — https://slotjin.com/zone/zakuro/
   - 約32G/50枚、最大1280G+前兆8G、設定変更で天井Gリセット、モード別天井、リセット後天国25%。
   - confidence: ANALYSIS_SINGLE_FOR_BASE / ANALYSIS_CORROBORATING_FOR_RESET
10. スロット期待値クエスト — https://www.slopachi-quest.com/article/%E3%81%96%E3%81%8F%E3%82%8D-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88/
   - 据え置き時の天井/モード/液晶G引継ぎ、設定変更時リセット、天国25%、液晶判別。
   - confidence: ANALYSIS_PERIOD_SECONDARY
11. 真パチスロ備忘録 — https://sin-surobi.com/otomeyoukaizakuro/9910/
   - 据え置き時液晶G数引継ぎの当時実戦確認と、据え置きのまま液晶履歴を消せるとの追記。
   - confidence: PERIOD_USER_OBSERVATION / DETECTION_CAVEAT

## missingFields

- 純電源OFF→ONのみの内部天井G・モード・液晶表示の本機固有契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時モードの天国25%以外の完全振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の通常内部状態振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 50枚ベースの公式/別系統精密値: 約32Gの単一解析系値のみ。

## conflicts

- 数値の主要性能コアに重大CONFLICTなし。
- 朝一液晶表示は通常「据え置き=引継ぎ / 変更=リセット」の判別材料だが、据え置きでも履歴消去可能との当時情報があるため **判別の確定性に制約**あり。

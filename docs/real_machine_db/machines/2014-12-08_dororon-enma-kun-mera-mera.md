# Dororonえん魔くん メ～ラめら

machineName: Dororonえん魔くん メ～ラめら
manufacturer: KPE
releaseDate: 2014-12-08
releaseDatePrecision: hall_start_official_and_multi_source
generation: 5号機
systemType: ART / 疑似ボーナス / CZ / ゲーム数管理
modelName: ドロロンえん魔くんKN
inspectionNumber: 4S0753
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_PAYOUT_CONFLICT

## identity

- KPE製5号機ART。コナミ公式アーカイブは2014年12月稼働、当時KONAMI公式ブログは **2014-12-08より全国ホール登場** と告知。K-Navi / HAZUSE / 必勝本も2014-12-08で一致。
- 型式名 **ドロロンえん魔くんKN**、検定番号 **4S0753** はHAZUSEで確認。
- confidence: OFFICIAL_FOR_MONTH_AND_NATIONWIDE_START / ANALYSIS_HIGH_FOR_MODEL_ID

## payoutRateBySetting

| 設定 | canonical | conflict source |
|---:|---:|---:|
| 1 | 97.1% | - |
| 2 | 98.5% | - |
| 3 | 100.2% | - |
| 4 | 104.2% | - |
| 5 | **109.6%** | **109.9%** |
| 6 | 112.8% | - |

- 必勝本 / パチビー / 2014年当時スペック記事が設定5 **109.6%** で一致するためcanonical。
- K-Navi / HAZUSEは設定5 **109.9%**。平均せず `CONFLICT_PAYOUT_RATE_SETTING5_109_6_VS_109_9` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT_SETTING5

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/251.8 |
| 2 | 1/236.9 |
| 3 | 1/226.4 |
| 4 | 1/195.0 |
| 5 | 1/168.7 |
| 6 | 1/127.7 |

- K-Navi / HAZUSE / 必勝本 / パチビーで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G / 50枚**（旧パチマガスロマガ）。
- confidence: ANALYSIS_SINGLE_LEGACY_PRIMARY_ANALYSIS_ARCHIVE

## netIncrease

- ART「ハルマゲどんタイム」: **純増約2.3枚/G**。
- コナミ系当時資料、グリーンべると、K-Navi、必勝本、パチビーで整合。
- confidence: OFFICIAL_INDUSTRY_AND_ANALYSIS_MULTI_SOURCE

## basicPayout

- ART「ハルマゲどんタイム」: **1セット40G+α / 純増約2.3枚/G**。
- ドロロンボーナス: **30G**。
- ハ～トふるボーナス: **10G+α**。
- CZ期待度: メ～ラめらチャレンジ約35%、プ～ルぷるチャレンジ約60%、プ～ルめらチャレンジ約80%。比較用補助値として保持。

## modeSpecificMinimumData

- ART当選はゲーム数テーブル + CZ等。
- モード別ゲーム数天井: **通常A 996G / 通常B 696G / 天国 96G / 超天国 32G**。
- ART間999Gには別系統のフリーズ天井があり、999G到達時は地獄フリーズ。
- ART間700G以降の当選には仲間獲得恩恵が公開されているが、通常リセット性能コアとは分離する。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: HIGH_FOR_SETTING_CHANGE_MODE_NUMBERS_PARTIAL_FOR_CARRYOVER_POWER_CYCLE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をリセット**。
- 設定変更後は内部モードを再抽選し、通常B以上が選ばれやすい専用振り分けが公開されている。
- 設定変更後の内部状態・液晶初期ステージについて、本機固有の安全な直接契約は今回の再探索で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_AND_MODE

### carryOverBehavior

- 据え置き時について、宵越し狙い文脈の二次資料は存在するが、前日ゲーム数・モード・状態の全項目を明示した本機固有の直接表を今回固定できなかった。
- `UNVERIFIED_AFTER_RESEARCH`。一般的5号機挙動から推定しない。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ONについて、ゲーム数・モード・状態を明示した本機固有の直接契約を確認できず。
- `UNVERIFIED_AFTER_RESEARCH`。据え置き情報から自動転記しない。

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き / power cycle: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_MULTI_SOURCE_FOR_RESET

### ceilingAfterReset

- 設定変更時は専用モード振り分けにより、通常B（696G）・天国（96G）・超天国（32G）が高比率となる。
- 「全リセット台が一律○G天井」という固定短縮ではなく、**モード再抽選による実質的な天井優遇**として記録する。

### modeAfterReset

設定変更時モード移行率（K-Navi、自社調べ）:

| 設定 | 通常A | 通常B | 天国 | 超天国 |
|---:|---:|---:|---:|---:|
| 1 | 27.4% | 50.0% | 22.5% | 0.1% |
| 2 | 18.9% | 60.0% | 21.0% | 0.1% |
| 3 | 22.4% | 52.0% | 25.5% | 0.1% |
| 4 | 14.9% | 62.5% | 22.5% | 0.1% |
| 5 | 19.4% | 55.0% | 25.5% | 0.1% |
| 6 | 9.9% | 65.0% | 25.0% | 0.1% |

- 設定1でも通常B以上 **72.6%**、設定6は **90.1%**。
- 設定1の通常B以上72.6%は後年回顧記事の「リセット時72%以上で通常B or 天国スタート」と整合。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE_WITH_SECONDARY_CORROBORATION

### stateAfterReset

- `UNVERIFIED_AFTER_RESEARCH`。
- 内部状態の通常時全移行率は完全再現用のため収集しない。設定変更時の初期状態のみ再探索したが直接値を固定できず。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 最大の公開恩恵は **通常B以上への高い移行率**。
- 通常B天井696G、天国96G、超天国32Gのため、通常A 996Gに比べ設定変更後のゲーム数天井が浅くなりやすい。
- 設定1でも天国+超天国 **22.6%**。

### resetPenalties

- 公開された独立した「設定変更専用冷遇」数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時に前日進捗がどう持ち越されるかは直接契約未確認のため、消失価値を推定しない。

### resetDetection

- 本機固有のガックン、初期出目、初期ステージで設定変更を確定/高精度推測できる直接資料は、表記揺れ・型式名・メーカー名を含む再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一ゲーム数挙動は専用モード分布により通常B/天国域へ寄りやすいが、単台の設定変更確定材料にはしない。

### numericResetData

- 設定変更時モード移行率: 上記表。
- 通常B以上合計:
  - 設定1 **72.6%**
  - 設定2 **81.1%**
  - 設定3 **77.6%**
  - 設定4 **85.1%**
  - 設定5 **80.6%**
  - 設定6 **90.1%**
- 天国+超天国:
  - 設定1 **22.6%**
  - 設定2 **21.1%**
  - 設定3 **25.6%**
  - 設定4 **22.6%**
  - 設定5 **25.6%**
  - 設定6 **25.1%**

### publicMorningNumbers

- 新台初日1回目ATを集計した当時実戦記事でも朝一リセット後ゾーンが公開されているが、解析テーブルと実戦値は別系列のため混合しない。
- canonicalな朝一比較値は上記 **設定変更時モード移行率** を採用。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `Dororonえん魔くん メ～ラめら / ドロロンえん魔くん / えん魔くん メーラめら / ドロロンえん魔くんKN / KPE`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / モード移行 / 状態 / ガックン / 50枚 / ベース / コイン持ち`。
- 資料系統: KONAMI/KPE公式、グリーンべると、K-Navi、HAZUSE、パチ＆スロ必勝本、旧パチマガスロマガ、パチビー、当時攻略記事、後年回顧資料。
- パチンコ版など同名別機種を混入させていない。

## sources

取得日: 2026-09-07

1. KONAMI公式 機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2014/de/
2. KONAMI公式 こちらマジハロ情報局（2014-11-25、12/8全国登場告知）: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2014/mhs_blog_141125.html
3. グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/6903/greenbelt
4. K-Navi 機種トップ: https://p-kn.com/slot/2151/
5. K-Navi 設定変更時モード移行率: https://p-kn.com/slot/2151/52527/
6. HAZUSE: https://hazuse.com/machine/pachislot/4S0753/
7. パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2480/1/49270
8. パチ＆スロ必勝本 CZ解析入口: https://p.hisshobon.jp/machine/2480/1/49793
9. 旧パチマガスロマガ 小役/50枚ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/38/c.php
10. パチビー: https://www.pachibee.jp/machines/index/214100004
11. 期待値見える化 朝一リセット実戦値: https://slotjin.com/slot/dororonenma-reset/
12. パチ7 回顧資料: https://pachiseven.jp/articles/detail/11377
13. 当時スペック記事: https://pachinkopachisro.com/archives/40637982.html

## missingFields

- 据え置き時のゲーム数/モード/状態の本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ONの本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の初期内部状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン/初期出目判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- `CONFLICT_PAYOUT_RATE_SETTING5_109_6_VS_109_9`
  - 109.6%: 必勝本 / パチビー / 2014年当時スペック記事 / 後年再構築DB
  - 109.9%: K-Navi / HAZUSE
  - 平均しない。canonicalは複数系統一致の109.6%。

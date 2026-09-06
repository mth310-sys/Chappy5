# パチスロ三國志

machineName: パチスロ三國志
manufacturer: ニューギン
releaseDate: 2014-10-06
releaseDatePrecision: nationwide_hall_start
generation: 5号機
systemType: AT / ゲーム数解除 + CZ / ゲーム数上乗せ + セットストック
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_CONFLICTS

## identity

- メーカー: **ニューギン**。
- 全国ホール導入開始: **2014-10-06**。パチスロ必勝本、パチ7、ALL7で一致。ニューギン直営店では2014年9月時点で全国導入に先行して稼働していたため、直営先行と全国導入を分離する。
- 型式名: **パチスロ三國志X**。後年の高射幸性遊技機公表資料・5号機回顧資料で確認。
- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`。型式名、メーカー名、検定通過、検定番号、2014/8/11等を組み替えて再探索したが、安全に固定できる数字形式番号を今回確定できず。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_HALL_DATE / INDUSTRY_RETROSPECTIVE_FOR_MODEL_NAME

## payoutRateBySetting

### 系列A — パチマガスロマガ独自調査値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 97% |
| 2 | 98% |
| 3 | 100% |
| 4 | 102% |
| 5 | 106% |
| 6 | 110% |

### 系列B — パチスロ必勝本編集部調べ

| 設定 | PAYOUT |
|---:|---:|
| 1 | 97.7% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 102.8% |
| 5 | 106.7% |
| 6 | 110.7% |

- 5号機回顧/中古実機系にも97.7〜110.7%系列が残る。
- 単なる桁丸めと断定せず、DBでは `CONFLICT_PAYOUT_RATE_SOURCE_SERIES` として両系列を保持する。
- confidence: CONFLICT

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/288.57 |
| 2 | 1/279.50 |
| 3 | 1/267.03 |
| 4 | 1/246.91 |
| 5 | 1/219.03 |
| 6 | 1/194.78 |

- パチマガスロマガ、パチスロ必勝本、2014年当時ホール系紹介記事で一致。
- pacnkのみ設定1を **1/228.6** と掲載するが、設定2〜6は一致。孤立した転記差の可能性が高いものの推定修正は行わず `CONFLICT_SETTING1_AT_INITIAL_PACNK_1_228_6_VS_MULTI_SOURCE_1_288_57` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_ONE_SOURCE_CONFLICT

### CZ「飛将チャレンジ」初当たり — 補助比較値

| 設定 | CZ初当たり |
|---:|---:|
| 1 | 1/295.94 |
| 2 | 1/274.55 |
| 3 | 1/254.19 |
| 4 | 1/229.46 |
| 5 | 1/207.49 |
| 6 | 1/189.61 |

- 2014年当時ホール系紹介記事で確認。初当たり構造上重要なCZとして補助保存。
- confidence: ANALYSIS_SINGLE_CONTEMPORARY

## baseGamesPer50

- **32.82G/50枚**。
- パチマガスロマガ独自調査値。
- confidence: ANALYSIS_HIGH_SINGLE

## netIncrease

- AT「英傑乱舞」: **約2.8枚/G**。
- P-WORLD、パチマガスロマガ、当時ホール系記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「英傑乱舞」: **1セット30G+α**。
- メインATは豪傑RUSH / 赤壁RUSH。ゲーム数上乗せ + セットストック型。
- 「三國決戦」は20Gの一騎打ち超高確率ゾーン。
- CZ「飛将チャレンジ」は10G / 20G / AT当選まで継続のいずれか。
- confidence: INDUSTRY_DATABASE_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除に関わる複数モードが存在。
- 現存整理資料では、天井/最大規定Gの表記に以下の差がある。
  - モード別整理: 通常A 950G / 通常B 950G / 通常C 1150G / 天国 50G / 超天国 1G / 引き戻し 250G。
  - 別解析・回顧系: AT終了後 **約1200G**で天井到達。
- 1150G規定 + 前兆等の定義差で約1200G表記になっている可能性はあるが、資料本文から同一定義と断定せず `CONFLICT_OR_DEFINITION_DIFFERENCE_CEILING_1150_MODE_C_VS_APPROX_1200` として保持。
- 天井到達時はAT「英傑乱舞」当選。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- パチマガスロマガの現存機種トップには本機専用の **「朝イチ・設定変更」**項目が存在することを確認した。
- ただし現存検索インデックスから当該本文の具体的な設定変更契約（天井G、モード、内部状態等）を安全に復元できなかった。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン`、型式名 `パチスロ三國志X`、ニューギン、略称/表記揺れへ検索語を変更し、パチマガスロマガ、P-WORLD、パチ7、必勝本、旧攻略DB、当時ホール記事、後年回顧資料を横断したが、設定変更時の各状態を直接固定する複数資料を取得できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 据え置き時のAT間ゲーム数/規定G、通常モード、CZ関連状態等の保持契約を本機固有の直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「設定変更資料が見つからないから据え置きは保持」とは推定しない。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ONで、規定G進捗・モード・内部状態・液晶表示がどう扱われるかを本機固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き一般論から純電断挙動を推定しない。

### gameCounterReset

- 設定変更時/据え置き時/純電断時の規定ゲーム数進捗の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 本機専用の「設定変更後○G短縮天井」または変更後専用最大天井数値は、十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時のモード別天井値（通常A/B 950G、通常C 1150G等）はリセット専用値として扱わない。

### modeAfterReset

- 通常A/B/C、天国、超天国、引き戻し等の通常時モードの存在は確認。
- **設定変更時の初期モード振り分け / 専用朝一モード / モード再抽選・引継ぎ契約**は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時の通常内部状態/CZ関連状態の初期化・再抽選・引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の天井短縮、朝一高確、CZ優遇等の主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のリールガックン、朝一液晶、初期ステージ、ゲーム数表示等による設定変更/据え置き判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 旧IGTジャパンの別機種「三國志」にある「設定変更後はCZスタート」という情報は、2014年ニューギン機とは別機種のため転記しない。

### numericResetData

- `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 設定変更時のみ適用される公開モード振り分け、朝一当選率、短縮天井、CZ突入率等の比較可能な数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロ三國志 / パチスロ 三國志 / 三国志 / 三國志 / パチスロ三國志X / ニューギン`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード移行 / ガックン / 初期出目 / ステージ / ゲーム数`。
- 資料系統: P-WORLD、パチマガスロマガ、パチ7、パチスロ必勝本、ALL7、pacnk、当時ホール紹介、5号機回顧、高射幸性遊技機公表資料。
- 2007年前後のIGTジャパン「三國志」、WIN NET TECHNOLOGY「三国争覇伝」、2015年パチンコ「CR三國志～英雄集結～」は別機種として除外。

## sources

取得日: 2026-09-07

1. パチマガスロマガ — パチスロ三國志 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/newgin_slot_34.php
   - 2014年10月、AT機、攻略項目に「朝イチ・設定変更」が存在
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/h.php
   - AT初当たり 1/288.57〜1/194.78、PAYOUT 97〜110%
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役/50枚ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/c.php
   - 50枚あたり32.82G
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — AT突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/34/l.php
   - 英傑乱舞30G+α、純増2.8枚/G、CZ 10G/20G/無限
   - reliability: ANALYSIS_HIGH
5. パチスロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/list.php?c=1&d=48482&mid=2468&p=2
   - 導入2014-10-06、AT初当たり、機械割97.7〜110.7%
   - reliability: ANALYSIS_HIGH
6. P-WORLD — パチスロ三國志
   - https://www.p-world.co.jp/machine/database/7497
   - 5号機AT、英傑乱舞30G+α、純増約2.8枚/G
   - reliability: INDUSTRY_DATABASE
7. パチ7 — パチスロ三國志
   - https://pachiseven.jp/machines/4259/cutout/94
   - 導入2014-10-06、メーカー・解析値
   - reliability: ANALYSIS_HIGH
8. ALL7 — 2014年10月導入一覧
   - https://www.all7.jp/plans/index/2014/10
   - 2014-10-06 パチスロ三國志
   - reliability: INDUSTRY_CALENDAR
9. pacnk — パチスロ三國志
   - https://pacnk.com/slot/2014/sangokushi/top.php
   - モード存在、約1200G天井、PAYOUT。設定1 AT初当たり1/228.6は他資料と競合
   - reliability: ANALYSIS_SINGLE_WITH_CONFLICT
10. パチスロ天井一覧
   - https://pachi-data.com/tenjyoujyouhou/
   - 通常A/B 950G、通常C 1150G、天国50G、超天国1G、引き戻し250G
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
11. 遊技日本 — 高射幸性遊技機リスト公表
   - https://yugi-nippon.com/pachinko-news/post-17869/
   - 型式表記「パチスロ三國志Ⅹ」、日付2014/8/11
   - reliability: INDUSTRY
12. pachinko's blog 2014 archive — 5号機回顧
   - https://pachinko.hatenablog.jp/archive/2014
   - 型式名「パチスロ 三國志 X」、2014年10月リリース
   - reliability: RETROSPECTIVE_SINGLE
13. 当時ホール紹介 — でるでる益子
   - https://ameblo.jp/deruderu-mashiko/entry-11933930625.html
   - AT/CZ確率、純増、AT基本G数
   - reliability: CONTEMPORARY_SECONDARY

## missingFields

- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時の天井G進捗契約: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き時の天井/モード/状態契約: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時の天井/モード/状態契約: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時の初期モード/状態振り分け: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン/変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`
- 公開朝一専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`

## conflicts

- `CONFLICT_PAYOUT_RATE_SOURCE_SERIES`: 97/98/100/102/106/110% vs 97.7/98.7/100.2/102.8/106.7/110.7%。
- `CONFLICT_SETTING1_AT_INITIAL_PACNK_1_228_6_VS_MULTI_SOURCE_1_288_57`。
- `CONFLICT_OR_DEFINITION_DIFFERENCE_CEILING_1150_MODE_C_VS_APPROX_1200`。定義を平均しない。

# ニューアイムジャグラーEX-KT

machineName: ニューアイムジャグラーEX-KT
manufacturer: 北電子
releaseDate: 2014-08-04
releaseDatePrecision: exact_start
generation: 5号機
systemType: ノーマルAタイプ / 完全告知
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- 北電子公式製品ページで「ニューアイムジャグラーEX-KT」を確認。
- 北電子公式は2014年8月製品として掲載。K-Naviはホール導入開始を **2014-08-04** とする。
- 北電子公式は本機を「ニューアイムジャグラーEX-Cと同一スペック」と明記。
- 北電子公式検定情報ページでは各都道府県の2014年6〜7月公示を確認。
- 本調査ではEX-Cの型式名をEX-KTへ自動転記しない。EX-KT固有の型式表記は今回の横断再探索で安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL / ANALYSIS_HIGH

## payoutRateBySetting

### メーカー公表出玉率（工場データから算出した予測値）

| 設定 | 出玉率 |
|---:|---:|
| 1 | 95.9% |
| 2 | 96.7% |
| 3 | 98.7% |
| 4 | 100.8% |
| 5 | 102.8% |
| 6 | 105.2% |

- 北電子公式値を主値とする。
- 後年解析にはチェリー/ベル/ピエロ取得条件を含む技術介入・シミュレータ理論値として、設定1〜6で約96.9〜106.6%、別シミュレータでは完全取得時97.37〜107.05%などがある。
- 定義が異なるため平均せず、メーカー公表値と攻略時理論値を別系列として扱う。`CONFLICT`にはしない。
- confidence: OFFICIAL

## initialHitBySetting

| 設定 | BB | RB | 合成 |
|---:|---:|---:|---:|
| 1 | 1/287.4 | 1/455.1 | 1/176.2 |
| 2 | 1/282.5 | 1/442.8 | 1/172.5 |
| 3 | 1/282.5 | 1/348.6 | 1/156.0 |
| 4 | 1/273.1 | 1/321.3 | 1/147.6 |
| 5 | 1/273.1 | 1/268.6 | 1/135.4 |
| 6 | 1/268.6 | 1/268.6 | 1/134.3 |

- 北電子公式・K-Navi・P-WORLD・複数解析で一致。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- チェリー狙い時の解析値:
  - 設定1: **35.00G/50枚**
  - 設定2: **35.00G/50枚**
  - 設定3: **35.01G/50枚**
  - 設定4: **35.01G/50枚**
  - 設定5: **35.02G/50枚**
  - 設定6: **36.38G/50枚**
- 設定6はブドウ確率差によりベースが高い。打ち方条件付きの値として保持する。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- NOT_APPLICABLE_NORMAL_TYPE。

## basicPayout

- BB: **約325枚**。
- RB: **約104枚**。
- 北電子公式、P-WORLD、複数解析で一致。
- HAZUSEではBB「336枚を超える払出で終了」、REG「98枚を超える払出で終了」という規則表記も確認。これは純増約325/104枚と定義が異なるため混同しない。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ノーマルAタイプ、ART等の付加機能なし。
- 天井: **なし**。
- GOGO!ランプ点灯でボーナス確定。先告知約1/4、後告知約3/4。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- ノーマルAタイプのため、AT/ARTのゲーム数天井・モード・高確状態などのリセット対象は **NOT_APPLICABLE_NORMAL_TYPE**。
- 同一系統「ニューアイムジャグラーEX」の攻略資料では、設定変更後に店側が回していなければ朝一1G目のリール始動でガックンが発生し得るとされる。
- EX-KT固有名義での直接資料を今回固定できなかったため、ガックンは `SAME_SPEC_SERIES_SUPPORT` とし、確定契約にはしない。

### carryOverBehavior

- 天井・モード・AT/ART状態は非搭載のため該当なし。
- 設定据え置き時の本機固有のリール初期位置/ガックン契約を直接明記した資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 単純電源OFF→ONのみの場合に、設定変更と区別して記録すべき天井・モード・有利区間状態は非搭載。
- 電源再投入時のリール初期挙動をEX-KT固有で明示する直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- 通常時ゲーム数による天井は存在しない。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset

- `NOT_APPLICABLE_NORMAL_TYPE_NO_INTERNAL_AT_MODE_CONFIRMED`。

### stateAfterReset

- `NOT_APPLICABLE_NORMAL_TYPE_NO_AT_ART_STATE_CONFIRMED`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更固有の天井短縮・朝一モード優遇・CZ優遇などは `NOT_APPLICABLE_NORMAL_TYPE`。
- 朝一の主要価値は変更判別候補としてのリールガックン観察。

### resetPenalties

- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 同一系統ニューアイムジャグラーEX攻略では **朝一1G目のガックンチェックが有効**とされる。
- ただし「設定変更後に店側が回していない」ことが前提で、個体差や毎ゲーム微ガックンする台もあるため過信不可。
- EX-KT固有の直接記述を固定できていないため、信頼度は `ANALYSIS_SINGLE_SAME_SPEC_SERIES_SUPPORT`。

### numericResetData

- 天井短縮G数: NOT_APPLICABLE。
- 朝一モード振分: NOT_APPLICABLE。
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH。

### publicMorningNumbers

- 比較可能な朝一専用数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

- 表記揺れ: `ニューアイムジャグラーEX-KT / ニューアイムジャグラーEX KT / ニューアイム / ニューアイジャグ / ニューアイムジャグラーEX / EX-C / 北電子`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 1G目 / 天井 / モード / 50枚 / ベース / 型式 / 検定`。
- 資料系統: 北電子公式製品・検定情報、K-Navi、P-WORLD、HAZUSE、ジャグラー専門解析、後年攻略資料。
- 6号機SアイムジャグラーEX、2025年ネオアイムジャグラーEXは別機種として除外。

## sources

取得日: **2026-09-07**

1. 北電子公式 — ニューアイムジャグラーEX-KT
   - https://www.kitadenshi.co.jp/slot/newimjugglerex-kt/
   - 同一スペック注記、BB/RB、設定別確率・メーカー公表出玉率
   - reliability: OFFICIAL
2. 北電子公式 — ニューアイムジャグラーEX-KT 検定情報
   - https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex-kt/
   - 2014年6〜7月の地域別公示
   - reliability: OFFICIAL
3. K-Navi — ニューアイムジャグラーEX-KT
   - https://p-kn.com/slot/2097/
   - ホール導入開始2014-08-04、ノーマル/完全告知、設定別確率
   - reliability: ANALYSIS_HIGH
4. P-WORLD — ニューアイムジャグラーEX-KT
   - https://www.p-world.co.jp/machine/database/7465
   - 5号機ノーマル、BB約325枚/RB約104枚
   - reliability: ANALYSIS_HIGH
5. HAZUSE — ニューアイムジャグラーEX
   - https://hazuse.com/machine/pachislot/SX0042/
   - メーカー公表系列の機械割、払出終了条件
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
6. 激アツ — ニューアイムジャグラーEX解析
   - https://gekiatsu7.com/slot-analyze/1995/
   - 50枚ベース、攻略時出玉率、ガックンチェック
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
7. ジャグラー解析攻略 — ニューアイムジャグラーEX / EX-KT
   - https://juggler7.com/newaimex/index.html
   - EX-KT導入、同一スペック、設定別確率、獲得枚数、メーカー発表値の照合
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
8. パチ7 — 5号機ニューアイムジャグラーEX-KT回顧
   - https://pachiseven.jp/articles/detail/11292
   - 天井なし、設定6確率、5号機設置期限回顧
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- EX-KT固有の正式型式名 / 検定番号表記
- EX-KT固有資料による設定変更・据え置き・純電断時のリール初期挙動
- 朝一専用の比較可能な公開数値（存在未確認）

## conflicts

- メーカー公表出玉率95.9〜105.2%と、攻略/技術介入時の96.9〜106.6%級・完全取得97.37〜107.05%級は数値差があるが、打ち方/取得条件の定義差として別系列保持。平均化しない。

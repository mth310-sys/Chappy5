# ぱちスロ 必殺仕事人

machineName: ぱちスロ 必殺仕事人
manufacturer: 京楽産業.
releaseDate: 2014-07-22
releaseDatePrecision: exact_start
generation: 5号機
systemType: ART / 疑似ボーナス / CZ / 天井
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- K-Navi、P-WORLD、京楽公式展示会資料、当時業界記事で京楽産業.製を確認。
- K-Naviおよび京楽実機アプリ配信時の業界記事で全国導入開始 **2014-07-22** を確認。
- 2014-06-18の京楽公式展示会で発表された京楽パチスロ第2弾。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 104.5% |
| 5 | 107.8% |
| 6 | 112.5% |

- 5号機クロニクルおよび当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似BONUS合算

| 設定 | BONUS合算 |
|---:|---:|
| 1 | 1/251.6 |
| 2 | 1/246.2 |
| 3 | 1/227.5 |
| 4 | 1/217.4 |
| 5 | 1/191.0 |
| 6 | 1/175.5 |

- P-WORLD、当時解析で一致。
- 本機は疑似ボーナス搭載ART機。上記をART初当たりと誤って扱わない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31.5G/50枚**。
- パチマガスロマガ旧攻略の小役/50枚ページで確認。当時販売情報にも約31.5G/50枚の記載あり。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## netIncrease

- 疑似ボーナス / ART「必殺モード」とも **約2.0枚/G**。
- ART「必殺モード」は **1セット40G**。
- 京楽公式展示会、グリーンべると、K-Navi、P-WORLDで照合。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 必殺BONUS: 40G、純増約2.0枚/G、ART期待度約50%。
- 殲滅BONUS: 40G、純増約2.0枚/G、ART期待度約30%。
- 出陣BONUS: 最大100G、純増約2.0枚/G、終了後は出陣RUSH確定。
- ART「必殺モード」: 1セット40G、純増約2.0枚/G、乱舞玉を用いた継続抽選型。
- 出陣RUSH: 10G、特定小役出現率約1/2.5。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時のBONUS当選はレア役直撃または恨一撃必殺チャレンジが基本。天井以外の通常ゲーム数解除は行われない。
- 通常時BONUS・ART間 **999G+前兆**で天井。到達後は無限集結チャレンジを経由して **出陣RUSH+ART確定**。
- **700G以降のBONUSは必殺BONUS以上確定**。
- 天国相当の内部モードが存在し、当時解析では96Gを区切りとして扱う資料がある。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数をRESETし0Gスタート**。
- **内部モードを再抽選**。
- **恨み玉メーターを再抽選**。
- 朝一ステージはランダムスタート。
- 当時解析の設定変更専用ページで直接確認。

### carryOverBehavior

- 据え置き時は **天井ゲーム数を引き継ぐ**。
- **内部モードを引き継ぐ**。
- **恨み玉メーターを引き継ぐ**。
- 朝一の液晶上では恨み玉が0表示から始まるが、恨一撃必殺チャレンジ移行時に内部保持分が表示へ反映される。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### powerCycleBehavior

- 当時解析は「据え置き（電源ON/OFFのみ）」として、天井G・内部モード・恨み玉メーターの引継ぎを明記。
- ステージはランダムスタート。
- よって設定変更なし電源OFF→ONは上記3項目を **RETAIN/CARRYOVER** とする。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### gameCounterReset

- 設定変更: **RESET_TO_0G**。
- 据え置き: **CARRYOVER**。
- 電源OFF→ONのみ: **CARRYOVER**。
- 通常最大天井: **999G+前兆**。

### ceilingAfterReset

- 設定変更時は0Gから通常天井を再計数。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 700G以降のBONUS格上げは通常仕様であり、リセット専用恩恵ではない。

### modeAfterReset

- 設定変更: **内部モード再抽選**。
- 据え置き/純電断: **内部モード引継ぎ**。
- 設定変更時の具体的モード振分数値は今回の再探索では高信頼に固定できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 恨み玉メーターは設定変更時 **再抽選**、据え置き/純電断時 **引継ぎ**。
- 高確等その他内部状態の設定変更専用振分は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 0Gから通常天井を再計数するため、天井短縮という意味での固定恩恵は確認なし。
- 恨み玉メーターは設定変更時に再抽選されるが、再抽選値の公開振分は今回固定できず、恩恵/不利を定量化しない。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 朝一初回の「恨一撃必殺チャレンジ」で恨み玉表示を確認する方法が当時解析で示されている。
- 前日把握分の恨み玉が反映されれば **据え置き濃厚**、反映されなければ **リセット濃厚**。
- ただし恨み玉2個以下の場合はチャレンジ突入時に強制的に3個表示となる仕様があり、判別不能/精度低下ケースがある。
- ステージは設定変更・据え置きともランダムスタートのため単独判別には使えない。

### numericResetData

- 天井ゲーム数: 設定変更 **0Gスタート** / 据え置き・純電断 **引継ぎ**。
- 設定変更時の具体的モード振分、恨み玉再抽選振分、朝一当選率などは **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **0G**: 設定変更時の天井再計数開始値。
- 設定変更専用の短縮天井・朝一特定G以内当選率・モード振分などの比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

- 表記: `ぱちスロ 必殺仕事人 / パチスロ必殺仕事人 / 必殺仕事人 / 京楽 / KYORAKU`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 内部モード / 恨み玉 / 恨みメーター / ガックン / 変更判別`。
- 資料系統: 京楽公式展示会、グリーンべると/P-WORLD業界記事、K-Navi、P-WORLD、パチマガスロマガ旧攻略、パチ7、2014年当時解析、後年5号機DB。
- 2025年以降のスマスロ「新・必殺仕置人」等は別機種のため除外し、リセット408G等を本機へ転記しない。

## sources

取得日: **2026-09-07**

1. KYORAKU公式 — KYORAKU SURPRISE FESTIVAL 2014
   - https://www.kyoraku.co.jp/event/surprisefestival2014/
   - 2014-06-18展示会、京楽製「ぱちスロ必殺仕事人」発表
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース — 「AKB48」「仕事人」2機種同時発表
   - https://news.p-world.co.jp/articles/6626/greenbelt
   - ART特化、1セット40G、純増約2.0枚/G、ART突入率約50%
   - reliability: INDUSTRY
3. K-Navi — ぱちスロ 必殺仕事人
   - https://p-kn.com/slot/2094/
   - ホール導入2014-07-22、ART/疑似BONUS、40G、純増約2.0枚/G
   - reliability: ANALYSIS_HIGH
4. P-WORLD — ぱちスロ 必殺仕事人
   - https://www.p-world.co.jp/machine/database/7453
   - 5号機ART、BONUS合算、各BONUS/ART基本性能
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役確率/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/02/c.php
   - 約31.5G/50枚
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
6. パチ7 — 天井
   - https://pachiseven.jp/machines/4184/cutout/78
   - BONUS&ART間999G、出陣RUSH確定、700G以降BONUS格上げ
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
7. スロパチクエスト — 天井・スペック解析
   - https://www.slopachi-quest.com/article/shigotonin-tenzyou/
   - 999G+前兆、出陣RUSH+ART、機械割97.6〜112.5%、BONUS合算1/251.6〜1/175.5
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
8. スロパチクエスト — 設定変更・リセット時の挙動解析
   - https://www.slopachi-quest.com/article/shigotonin-reset/
   - 設定変更時: 天井Gリセット/内部モード再抽選/恨み玉再抽選。据え置き・電源ON/OFFのみ: 天井G/内部モード/恨み玉引継ぎ。朝一恨み玉による変更判別
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
9. 5号機クロニクル — 京楽産業＆オッケー.5号機一覧
   - https://5goki.com/kyoraku
   - 2014/7、機械割97.6/98.7/100.2/104.5/107.8/112.5%
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- 設定変更時の内部モード具体振分
- 設定変更時の恨み玉メーター再抽選具体振分
- その他高確等の設定変更/据え置き詳細

## conflicts

- 設定変更時の恨み玉メーターは解析上「再抽選」だが、当時実戦コメントでは0スタート報告もある。解析契約を主値とし、0固定とは断定しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

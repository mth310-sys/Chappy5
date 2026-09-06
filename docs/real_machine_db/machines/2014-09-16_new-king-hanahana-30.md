# ニューキングハナハナ-30

machineName: ニューキングハナハナ-30
manufacturer: パイオニア
releaseDate: 2014-09-16
releaseDatePrecision: exact_start_with_regional_rollout_conflict
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知 / 30Φ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- パイオニア公式更新履歴で **2014-09-16「『ニューキングハナハナ-30』導入開始！」** を確認。
- パイオニア公式2014製品一覧は **2014年9月発売**。
- HAZUSEも導入開始日 **2014-09-16**、型式名 **ニューキングハナハナDX-30**、検定番号 **4S0458**。
- K-Naviはホール導入開始を **2014-10-06** としており、地域先行/全国展開基準差の可能性があるため日付競合として保持。公式の明示的な「導入開始」を本DB releaseDateの主値に採用する。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH / CONFLICT_RELEASE_DATE_SECONDARY

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 112.0% |

- パチ＆スロ必勝本、みんスロ、中古実機資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/303 | 1/504 | 1/189 |
| 2 | 1/293 | 1/474 | 1/181 |
| 3 | 1/281 | 1/439 | 1/171 |
| 4 | 1/268 | 1/407 | 1/161 |
| 5 | 1/255 | 1/374 | 1/151 |
| 6 | 1/234 | 1/336 | 1/138 |

- 必勝本、HAZUSE、みんスロで一致。
- 一部二次資料では合算の丸めが設定2〜5で1G程度異なる（1/182、1/172、1/162、1/152）が、BIG/REG自体は一致。主系列は必勝本/HAZUSEの表記を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約38G/50枚**。
- パチマガスロマガの当時実戦値。メーカー公表値ではないため比較時は `PRACTICAL_VALUE` として扱う。
- confidence: ANALYSIS_SINGLE_PRACTICAL

## netIncrease

- NOT_APPLICABLE（AT/ART非搭載のノーマルタイプ）。

## basicPayout

- BIG: **約312枚**。
- REG: **約130枚**。
- HAZUSE、みんスロ、中古実機資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ。
- HAZUSEで **天井機能非搭載** を明示確認。
- AT / ART / CZ / 規定ゲーム数解除モードは非搭載。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機は天井・AT/ART・CZ・規定G解除モードを持たないノーマル機。
- 設定変更時にリセットされる天井G、モード、AT状態等は **NOT_APPLICABLE**。
- 本機固有の「設定変更時だけ発生する朝一抽選/恩恵」は、機種名・型式・朝一・設定変更・リセット・据え置き・ガックン等へ検索語を変え、公式/当時解析/後年DBを再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井G・規定G・モード・AT状態など、朝一客AIに影響する持越し対象は **NOT_APPLICABLE_NO_CEILING_OR_MODE**。
- 前日ボーナス履歴などホールデータ表示器側の情報は実機内部resetBehaviorとは別物として扱う。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONで維持/消去が収益上意味を持つ天井G・モード・AT状態は本機に存在しないため、v0.7対象項目としては **NOT_APPLICABLE_NO_PERSISTENT_GAMEPLAY_COUNTER_CONFIRMED**。
- リール初期位置等の物理挙動について本機固有の直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- **NOT_APPLICABLE_NO_CEILING**。
- HAZUSEで天井非搭載を確認。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井なし。

### modeAfterReset

- **NOT_APPLICABLE_NO_GAME_NUMBER_MODE**。
- 規定G解除/天国等の内部モードは非搭載。

### stateAfterReset

- AT/ART高確等の持続内部状態について本機では **NOT_APPLICABLE_AS_CORE_SYSTEM**。
- ボーナス抽選はノーマル機の通常抽選として扱い、朝一専用状態は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井短縮、朝一専用モード、CZ優遇、AT優遇などは非搭載/確認なし。

### resetPenalties

- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日の天井期待値を消す等の不利要素は天井非搭載のため該当しない。

### resetDetection

- 本機固有のガックン/リール初動による設定変更判別について、`ニューキングハナハナ-30 / ニューキンハナ / ニューキングハナハナDX-30 / 4S0458 / 設定変更 / リセット / 朝一 / 据え置き / ガックン / リール` で再探索。
- 2026年の別機種「ニューキングハナハナV-30」のガックン記事が多数混入するため除外。
- 2014年本機について解析確定できる資料は固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス確率やREG中/BIG中の設定推測要素は設定推測情報であり、変更/据え置きの直接判別とは分離する。

### numericResetData

- 公開されたリセット専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 朝一特定G以内当選率、リセット時モード振り分け、短縮天井値など: `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

- 表記揺れ: `ニューキングハナハナ-30 / ニューキングハナハナ / ニューキンハナ / ニューキングハナハナDX-30 / 4S0458`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / リール / 50枚 / 1000円 / ベース / コイン持ち`。
- パイオニア公式、HAZUSE、必勝本、パチマガスロマガ、K-Navi、古い解析DB、後年DBを横断。
- 2026年「ニューキングハナハナV-30」は別機種として除外。

## conflicts

- `CONFLICT_RELEASE_DATE_SECONDARY`:
  - パイオニア公式: **2014-09-16 導入開始**。
  - HAZUSE: **2014-09-16**。
  - 必勝本: **2014-09-16導入**。
  - K-Navi: **2014-10-06 ホール導入開始**。
  - 本DBは公式の導入開始日を主値に採用し、K-Navi値を地域/全国展開基準差の可能性として保持。
- 合算確率は丸め差あり。BIG/REG確率は主要資料で一致するため主値は個別確率からの代表表記を採用。

## missingFields

- 本機固有の設定変更/据え置き判別用ガックン・リール初動契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし電源OFF→ON時の物理リール初期挙動: `UNVERIFIED_AFTER_RESEARCH`。
- メーカー公表ベース値: `UNVERIFIED`; 当時実戦値約38G/50枚を別定義で保持。

## sources

取得日: **2026-09-07**

1. パイオニア公式 更新履歴 — 2014-09-16導入開始
   - https://www.slot-pioneer.co.jp/news.html
2. パイオニア公式 2014年製品一覧 — 2014年9月発売
   - https://www.slot-pioneer.co.jp/products/2014.html
3. パイオニア公式 ハナハナシリーズ一覧
   - https://www.slot-pioneer.co.jp/products/hanahana.html
4. HAZUSE — 型式/検定番号/2014-09-16/ボーナス確率/天井非搭載/獲得枚数
   - https://hazuse.com/machine/pachislot/4S0458/
5. パチ＆スロ必勝本 — 基本スペック/2014-09-16/機械割
   - https://p.hisshobon.jp/machine/2462/1/48037
6. パチマガスロマガ — 当時実戦ベース約38G/50枚
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/111/01.php
7. K-Navi — 2014-10-06表記（導入日競合確認）
   - https://p-kn.com/slot/2115/
8. みんスロ — 基本スペック照合
   - https://minslo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E2%80%9030/
9. けんのスロットシミュレーション — 天井なし/確率照合
   - https://kenslo65536.com/kaiseki/new-king-hanahana-30.html

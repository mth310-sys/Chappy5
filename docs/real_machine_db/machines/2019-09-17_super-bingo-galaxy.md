# スーパービンゴギャラクシー

recordNo: 1306
machineName: スーパービンゴギャラクシー
machineNameVariants: SUPER BINGO GALAXY / ビンゴギャラクシー
manufacturer: ベルコ
formalModel: SスーパービンゴギャラクシーG3
certificationNumber: 8S1314
releaseDate: 2019-09-17
generation: 6号機
systemType: AT / 周期管理・セット継続型

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 110.0% |

ベルコ公式、HAZUSE、複数解析で照合。

信頼度: OFFICIAL_PARTIAL + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | CZ合算 | BC初当たり |
|---|---:|---:|
| 1 | 1/345.7 | 1/637.7 |
| 2 | 1/329.4 | 1/610.0 |
| 3 | 1/312.2 | 1/580.1 |
| 4 | 1/295.9 | 1/552.0 |
| 5 | 1/280.3 | 1/524.1 |
| 6 | 1/266.8 | 1/501.2 |

ベルコ公式はBC確率を掲載。CZ合算はHAZUSE/複数解析で照合。

信頼度: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 全設定共通 約50G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「BINGO CHANCE」純増: 約4.6枚/G。

信頼度: OFFICIAL + INDUSTRY

## basicPayout

- BINGO CHANCE: 基本1セット33G、純増約4.6枚/G。
- 初回セット突破率約50%、2セット目以降は約80%ループ。
- Hooah!発生時は111G / 222G / 333G等の3桁ゲーム数。FFFは有利区間完走濃厚とする解析あり。

固定獲得枚数型ではないため、物差し値は33G×約4.6枚/Gを基本性能として保持する。

## modeSpecificMinimumData

- 通常時は周期管理。1周期平均約80G、最大150G+前兆。
- CZ終了後/エンディング後は外れ周期6回目、通常BC終了後は引き戻し周期を含み外れ周期7回目でCZ「THE BINGO」またはBCへ。
- 平均的な天井到達は約700〜800G前後。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 周期消化ゲーム数: RESET。
- 規定ゲーム数: RESET。
- 有利区間ランプ: RESET/消灯。
- 液晶図柄停止パターン: RESET。
- 液晶図柄: 8・6・5。
- 液晶ステージ: サターンステージ。

### carryOverBehavior

- 据え置き時は周期消化ゲーム数 / 規定ゲーム数 / 有利区間ランプを引き継ぐ。
- セグ表示そのものは電源ON/OFFでリセットされるため、見た目と内部進行を混同しない。

### powerCycleBehavior

- 電源ON/OFFのみ: 周期消化ゲーム数CARRY_OVER / 規定ゲーム数CARRY_OVER / 有利区間ランプCARRY_OVER。
- セグ表示はRESET。
- 液晶図柄停止パターンはRESET、液晶図柄は8・6・5。
- ステージは原則サターン（ビンゴワープ・ムーン・CZ・BC中を除く条件注記あり）。

### gameCounterReset

- 設定変更: 周期消化ゲーム数・規定ゲーム数RESET。
- 据え置き / 電源OFF→ON: CARRY_OVER。

### ceilingAfterReset

- 設定変更後も通常の周期天井構造から開始。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 設定変更時の周期進行・規定GはRESET。
- 内部モードについて、設定変更専用の比較可能なモード振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常時に公開される周期G振り分け/モード別CZ抽選は朝一専用数値へ流用しない。

### stateAfterReset

- 周期/規定Gの内部進行は設定変更でRESET、電断でCARRY_OVER。
- CZ/AT等の特殊状態そのものについての設定変更/純電断直接契約は、通常遊技可能状態を超える細部として `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- 設定変更: RESET / 朝一ランプ消灯。
- 据え置き / 電源OFF→ON: CARRY_OVER。

### resetBenefits

- 非有利区間中のレア役はCZ/AT直撃に若干期待できるとする当時解析あり。
- ただし設定変更後を積極的に狙えるレベルの専用恩恵は確認されず、当時攻略では「設定変更時の狙い目なし」。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 前日閉店時に有利区間ランプ点灯を確認できる条件では、朝一点灯=据え置き濃厚 / 消灯=設定変更濃厚。
- CZ終了後やBC→1周期目引き戻し終了後など、通常運用上もランプ消灯ケースがあるため前日状態不明なら確定判別ではない。
- 本機固有ガックン条件/発生率は検索語を変えても `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更専用のモード振り分け、朝一特定G以内当選率、短縮天井等の確定公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常1周期目の周期G数振り分けは設定別公開されているが、設定変更専用値とは断定せず朝一専用欄へ転記しない。

### resetBehavior 再探索メモ

「スーパービンゴギャラクシー / SUPER BINGO GALAXY / SスーパービンゴギャラクシーG3 / ベルコ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 周期 / 天井 / 規定ゲーム数 / モード / 内部状態 / 有利区間 / 有利区間ランプ / ガックン」を組み合わせて再探索。ベルコ公式、HAZUSE、当時解析、おスロおパチおいでやす、すろぱちくえすと、業界記事を横断した。

## qualityNotes / conflicts

- HAZUSEで型式 `SスーパービンゴギャラクシーG3`、検定番号 `8S1314`、2019-09-17導入を確認。
- ベルコ公式で6号機AT、純増約4.6枚/G、設定別BC初当たりを確認。
- PiDEAの2019-06-13業界記事で1セット33G、純増約4.6枚/G、導入予定2019-09-17を確認。
- HAZUSEのメーカー欄は「調査中」だが、ベルコ公式製品ページと業界記事でメーカーをベルコと確定。

## sources

取得日: 2026-09-11

1. ベルコ公式 — スーパービンゴギャラクシー
   - https://www.s-bellco.co.jp/products/slot/superbingo_galaxy/
   - 6号機AT、純増約4.6枚/G、設定別BC確率。
   - reliability: OFFICIAL
2. HAZUSE — スーパービンゴギャラクシー
   - https://hazuse.com/machine/pachislot/8S1314/
   - 型式、検定番号、導入日、CZ/AT初当たり、機械割、約50G/50枚、設定変更/電断対照表。
   - reliability: ANALYSIS_HIGH / DATABASE
3. おスロおパチおいでやす — 天井/朝一リセット
   - https://oslo-opachi.com/2019/09/12/bingogalaxy_tenjyou/
   - 周期天井、有利区間ランプ判別、非有利区間レア役の朝一恩恵。
   - reliability: ANALYSIS_HIGH
4. すろぱちくえすと — 天井解析/朝一
   - https://www.slopachi-quest.com/article/super-bingo-galaxy-tennjou/
   - 周期天井、約50G/50枚、ランプ判別、朝一恩恵の再照合。
   - reliability: ANALYSIS_HIGH
5. PiDEA — 高純増&減少区間なし「スーパービンゴギャラクシー」/ベルコ
   - https://www.pidea.jp/articles/%E9%AB%98%E7%B4%94%E5%A2%97%26%E6%B8%9B%E5%B0%91%E5%8C%BA%E9%96%93%E3%81%AA%E3%81%97%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%93%E3%83%B3%E3%82%B4%E3%82%AE%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%B7%E3%83%BC%E3%80%8D%EF%BC%8F%E3%83%99%E3%83%AB%E3%82%B3
   - 1セット33G、純増約4.6枚/G、周期構造、9月17日導入予定。
   - reliability: INDUSTRY
6. 日刊スポーツ — 2019年9月導入カレンダー
   - https://www.nikkansports.com/m/amusement/pachislot/news/amp/201909060000314.html
   - 9月17日導入群確認。
   - reliability: INDUSTRY

## missingFields

- machine-specific gakkun condition/probability: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset-only internal mode distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts

- none material.

recordStatus: COMPLETE_CORE_RESET_V07

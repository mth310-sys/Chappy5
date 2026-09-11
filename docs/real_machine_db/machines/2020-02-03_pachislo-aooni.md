# パチスロ 青鬼

recordNo: 1333
machineName: パチスロ 青鬼
machineNameVariants: 青鬼 / S青鬼L4 / S青鬼ver1.000L4 / Sパチスロ青鬼ver1.000L4
manufacturer: オリンピア
formalModel: Sパチスロ青鬼ver1.000L4
certificationNumber: PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH
releaseDate: 2020-02-03
generation: 6号機
systemType: AT / CZ経由型 / 高純増セットストック型

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.0% |
| 3 | 101.1% |
| 4 | 105.5% |
| 5 | 108.5% |
| 6 | 109.7% |

## initialHitBySetting
| 設定 | ラストジャッジ(CZ) | AT「超鬼ごっこ」 |
|---|---:|---:|
| 1 | 1/444.1 | 約1/2400 |
| 2 | 1/440.8 | PUBLIC_VALUE_NOT_FOUND |
| 3 | 1/438.4 | PUBLIC_VALUE_NOT_FOUND |
| 4 | 1/427.7 | PUBLIC_VALUE_NOT_FOUND |
| 5 | 1/409.0 | PUBLIC_VALUE_NOT_FOUND |
| 6 | 1/392.6 | 約1/400 |

- ラストジャッジは初当たり構造上の主要CZとして物差し値に採用。
- AT初当たりは設定1/6のみ複数解析で概算公開され、中間設定は推測補完しない。

## baseGamesPer50
- canonical: 約52.1G/50枚。
- 別資料では約52G、約52.6〜53.3Gの表記があり、測定条件/設定差/丸め差の可能性があるため平均化しない。

## netIncrease
- AT純増: 約8.0枚/G。

## basicPayout
- 青鬼BIG BONUS: 約160枚。
- AT「超鬼ごっこ」はセットストック型。青鬼BIG5連でエンディング到達の基本構造。
- 「ATTACK THE 2000」成功時は有利区間完走=2400枚獲得濃厚とする解析/機種紹介あり。

## modeSpecificMinimumData
- 有利区間移行後の最深天井: 444G+αでCZ「ラストジャッジ」。
- 有利区間開始時は必ず初期捕喰ポイント減算特化ステージ「オワリノハジマリ」へ移行。
- 捕喰チャンス出現率: 設定1 1/185.4、2 1/184.4、3 1/182.9、4 1/179.8、5 1/174.3、6 1/168.9。物差し補助値として保持。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_INTERNAL_STATE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 有利区間: **RESET**。
- 天井ゲーム数: **RESET**。設定変更後は新しい有利区間として444G+α天井を再計測。
- 有利区間開始時は **必ず「オワリノハジマリ」へ移行**。
- 内部状態・通常液晶ステージの詳細は当時解析が「調査中」で、後続の再探索でも設定変更専用確定契約を固定できず。

### carryOverBehavior
- 据え置きでは有利区間と内部天井進行を引き継ぐ。
- 内部状態・液晶ステージの独立した据え置き契約は公開確定資料を固定できず、一般論で補完しない。

### powerCycleBehavior
- 電源OFF→ONのみ: **有利区間を引き継ぐ**。
- したがって有利区間に紐づく内部天井進行もCARRY_OVERとして扱う。
- 内部状態・液晶ステージについては当時1gekiが設定変更/電断とも「現在調査中」としており、UNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- 表示上のゲーム数と内部天井進行を混同しない。

### ceilingAfterReset
- 設定変更後も最深 **444G+αでラストジャッジ**。
- 設定変更専用の短縮天井は確認できず、通常の有利区間開始時天井契約として扱う。

### modeAfterReset
- 有利区間開始時は必ず「オワリノハジマリ」から開始することを固定。
- 設定変更専用の内部モード振り分け数値は、表記揺れ/型式/メーカー名と「設定変更・リセット・朝一・モード・振り分け」を組み替えて再探索しても公開確定値を固定できず。

### stateAfterReset
- 設定変更時/純電断時の内部状態は当時解析自体が「現在調査中」。
- 後年解析でも独立した状態振り分けを固定できず、UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ONのみ: **CARRY_OVER**。
- 有利区間開始時は「オワリノハジマリ」へ移行。

### resetBenefits
- 朝一設定変更後は捕喰ポイント減算特化ステージ「オワリノハジマリ」から開始。
- これは初期ポイント減算の機会となるが、設定変更専用の平均減算pt・AT期待度・期待枚数など比較可能な公開確定値は固定できず。
- 設定変更専用短縮天井は確認できない。

### resetPenalties
- 設定変更により前日の有利区間/天井進行は失われる。
- 設定変更専用の追加的不利抽選・冷遇契約は公開確認できず。

### resetDetection
- 朝一「オワリノハジマリ」開始は設定変更を強く示唆する解析がある。
- 朝一「オワリノハジマリ」以外は据え置き濃厚とする攻略資料あり。ただしホール対策等を考慮し絶対確定扱いにしない。
- 有利区間ランプも設定変更/据え置き判別材料となる。有利区間を引き継いで点灯していれば据え置き方向、RESET後の消灯は変更方向の材料。
- 本機固有のリールガックン発生条件/率は検索語を変えた再探索でも公開確定値を固定できず。

### numericResetData / publicMorningNumbers
- 設定変更/有利区間移行後の最深天井: **444G+α**。
- 有利区間開始時「オワリノハジマリ」: **突入確定（100%）**。
- 設定変更専用モード振り分け / 朝一特定G以内AT当選率 / ガックン率 / 平均初期ポイント減算量: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## resetBehavior 再探索メモ
2026-09-11に `パチスロ 青鬼 / 青鬼 / S青鬼L4 / S青鬼ver1.000L4 / Sパチスロ青鬼ver1.000L4 / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 有利区間 / ランプ / ガックン / オワリノハジマリ` を組み替え、1geki、すろぱちくえすと、ちょんぼりすた、P-WORLD、当時解析、検定通過整理を横断。RESET/CARRY_OVERと有利区間開始時ステージは複数資料で固定。内部状態・液晶ステージ、ガックン、設定変更専用振り分けは推測補完しない。

## sources
取得日: 2026-09-11

1. 1geki — パチスロ 青鬼 基本スペック
   - https://1geki.jp/slot/s_aooni/
   - 2020-02-03導入、設定別ラストジャッジ、出玉率、純増8.0枚/G、ゲームフローを確認。
   - reliability: ANALYSIS_HIGH
2. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_aooni/3/
   - 444G+α天井、設定変更で有利区間RESET/オワリノハジマリ、電源OFF・ONで有利区間引継ぎを確認。当時時点で状態/液晶ステージは調査中。
   - reliability: ANALYSIS_HIGH
3. 1geki — 有利区間開始時の移行
   - https://1geki.jp/slot/s_aooni/43/
   - 有利区間開始時は必ずオワリノハジマリへ移行を確認。
   - reliability: ANALYSIS_HIGH
4. すろぱちくえすと — 天井/朝一
   - https://www.slopachi-quest.com/article/aooni-tennjou/
   - 設定変更/電源OFF ONの有利区間、朝一オワリノハジマリ、変更判別材料を照合。
   - reliability: ANALYSIS_HIGH_SUPPORT
5. P-WORLD — パチスロ 青鬼
   - https://www.p-world.co.jp/machine/database/9111
   - 6号機AT、純増8枚/G、青鬼BIG約160枚、444G天井を照合。
   - reliability: INDUSTRY_DATABASE
6. パチビー — パチスロ 青鬼
   - https://www.pachibee.jp/machines/index/219120007
   - 2020-02-03導入、機械割、BIG約160枚、純増8枚/G、444G天井を照合。
   - reliability: INDUSTRY_DATABASE
7. ぱちんこキュレーション — スロット青鬼
   - https://pachinko-curation.com/8750/
   - 2019-12-18にオリンピア名義 `Sパチスロ青鬼ver1.000L4` 検定通過、設定別性能、約52G/50枚を確認。
   - reliability: ANALYSIS_SINGLE_MODEL_SUPPORT
8. すろかい — パチスロ 青鬼解析
   - https://slotkaiseki.hatenablog.com/entry/aooni
   - `S青鬼L4`、2020-02-03、純増8枚/G、約52.6〜53.3G/50枚を確認。
   - reliability: ANALYSIS_SINGLE
9. 2-9伝説 — 青鬼
   - https://29den.com/aooni/
   - 設定変更で天井G数RESET、約52.1G/50枚を照合。
   - reliability: ANALYSIS_SUPPORT

## missingFields
- 公開検定番号（型式名は固定できたが番号は今回の横断検索で高信頼資料を固定できず）。
- 設定2〜5のAT初当たり公開確定値。
- 設定変更/純電断時の内部状態・液晶ステージの確定契約。
- 設定変更専用モード/状態振り分け。
- 朝一特定G以内AT当選率、平均初期ポイント減算量。
- 本機固有ガックン発生条件/率。

## conflicts
- baseGamesPer50: 約52.1G/50枚をcanonical。約52G、約52.6〜53.3G/50枚の資料もあり、定義/設定差/丸め差として併記し平均化しない。
- ちょんぼりすた本文に導入日「2019年2月3日」という年誤記が残る一方、1geki・パチビー・当時解析は2020-02-03で一致。canonicalは2020-02-03。

## status
coreStatus: COMPLETE_CORE_WITH_PARTIAL_AT_HIT_TABLE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_INTERNAL_STATE
confidence: ANALYSIS_HIGH_MULTI_SOURCE + INDUSTRY_DATABASE_SUPPORT

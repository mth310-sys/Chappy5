# PYRAMID EYE（ピラミッドアイ）

recordNo: 1314
machineName: PYRAMID EYE
machineNameVariants: ＰＹＲＡＭＩＤ ＥＹＥ / ピラミッドアイ / 秘宝伝ピラミッドアイ
manufacturer: 大都技研
formalModel: S PYRAMID EYE A2
certificationNumber: 8S0809
releaseDate: 2019-10-21
generation: 6号機
systemType: ノーマル / Aタイプ / 2段階設定 / 技術介入要素あり

## payoutRateBySetting

| 設定 | 市場掲載出玉率 | 完全攻略時 |
|---|---:|---:|
| 1 | 98.9% | 100.4% |
| 6 | 108.6% | 110.3% |

- 設定1・6のみの2段階設定。
- 業界試打記事は完全打ち時100.4〜110.3%を公表値として掲載。
- 通常/市場掲載値と完全攻略時を混同しない。

信頼度: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/69.1 | 1/93.1 | 1/39.7 |
| 6 | 1/57.0 | 1/74.0 | 1/32.2 |

業界記事、K-Navi、複数解析で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- canonical: 約22G/50枚。
- 一部当時資料は約23G/50枚表記。丸め/算出条件差の可能性があるため平均化しない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- N/A（RT等の付加機能を持たないボーナスタイプ）。

## basicPayout

- PYRAMID BONUS（BIG）: 平均約130枚。
- REGULAR BONUS（REG）: 平均約40枚。
- 業界資料ではBIGは224枚超払い出しで終了、REGは74枚超払い出しで終了と確認可能。

信頼度: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナス主体の6号機ノーマルタイプ。
- RT非搭載。
- 天井非搭載。
- ボーナス後は32G継続のピラミッドステージへ移行するが、これは朝一リセット専用恩恵ではない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_NO_MATERIAL_RESET_BENEFIT_FOUND
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 天井非搭載のため天井ゲーム数RESETはN/A。
- 一撃の当時「設定変更時」解析では液晶ステージは「現在調査中」。
- 設定変更時の成立済みボーナス/内部ボーナス状態、開始出目・開始ステージ等の本機固有直接契約は、表記揺れ・資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井非搭載のため宵越しゲーム数天井CARRY_OVERはN/A。
- 据え置き時の成立済みボーナス/内部状態や表示状態の直接契約は `PUBLIC_DIRECT_CARRYOVER_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### powerCycleBehavior

- 一撃の当時「電源OFF・ON時」解析では液晶ステージは「現在調査中」。
- 純電断時の成立済みボーナス/内部状態・出目等の本機固有契約を別資料でも固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 天井非搭載のためN/A。
- 朝一ゲーム数による天井狙い要素なし。

### ceilingAfterReset

- 天井非搭載。
- リセット専用短縮天井もN/A。

### modeAfterReset

- AT/ART用の通常モード・天井モードはN/A。
- 設定変更専用朝一モードの公開情報は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更/据え置き/純電断で比較可能な本機固有内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用の成立フラグ処理は推測補完しない。

### advantageousSectionReset

- ボーナスのみで出玉を増やすノーマルタイプで、RT等の付加機能を搭載しない。
- 本DBの朝一有利区間管理対象として比較すべきAT/ART有利区間契約は `N/A_FOR_BONUS_ONLY_NORMAL_TYPE`。

### resetBenefits

- ちょんぼりすたは朝一リセット恩恵を「特に無し」と整理。
- 天井非搭載のため、設定変更による天井短縮・宵越し消去に伴う主要な朝一攻略恩恵はない。

信頼度: ANALYSIS_SINGLE_DIRECT + MULTI_SOURCE_SYSTEM_CORROBORATION

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一設定変更を確定できる本機固有ガックン条件/発生率、初期出目、液晶ステージ等の直接契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 下パネル消灯は設定6示唆として扱われる情報であり、設定変更/据え置き判別とは別物なのでresetDetectionへ混入しない。

### numericResetData / publicMorningNumbers

- リセット専用短縮天井: N/A（天井非搭載）。
- 朝一専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更後特定G以内ボーナス当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 本機固有ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 公開朝一恩恵: 「特に無し」とする解析あり。

### resetBehavior 再探索メモ

`PYRAMID EYE / ＰＹＲＡＭＩＤ ＥＹＥ / ピラミッドアイ / 秘宝伝ピラミッドアイ / S PYRAMID EYE A2 / 大都技研` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 初期出目 / 有利区間` を組み合わせ、一撃、ちょんぼりすた、K-Navi、スロパチくえすと、2-9伝説、業界試打記事、検定情報、後年DBを横断した。設定変更/純電断の液晶ステージは当時一撃でも調査中のままで、比較可能な追加公開値を固定できなかった。

## qualityNotes / conflicts

- 導入日2019-10-21はパチスロサミットONLINE、業界記事、K-Navi、複数解析で一致。
- 型式 `S PYRAMID EYE A2`、検定番号 `8S0809` は2019-09-05広島県検定情報で確認。
- ベースは約22G/50枚が複数資料で優勢、一部資料に約23G/50枚表記。`CONFLICT_BASE_ROUNDING_22_VS_23` として保持。
- 出玉率は市場掲載98.9/108.6%と完全攻略100.4/110.3%で定義が異なるためCONFLICTではなく別定義として保持。
- resetBehaviorは天井/AT/ART由来の朝一恩恵が実質存在しない一方、成立済みボーナス等の実機完全再現用内部契約は公開資料で固定できないため推測しない。

## sources

取得日: 2026-09-11

1. グリーンべると / P-WORLD業界ニュース — 広島県検定情報 2019-09-05
   - https://web-greenbelt.jp/00011478/
   - `S PYRAMID EYE A2` / 大都技研 / 検定番号 `8S0809` を確認。
   - reliability: INDUSTRY
2. アミューズメントジャパン / P-WORLD業界ニュース — 衝撃の“超”Aタイプ
   - https://news.p-world.co.jp/articles/11892/amusement
   - 2段階設定、BB約130枚、REG約40枚、完全打ち出玉率100.4〜110.3%、2019-10-21導入予定を確認。
   - reliability: INDUSTRY / CONTEMPORARY
3. PiDEA X — PYRAMID EYE機種ページ公開
   - https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E3%80%8Cpyramid-eye%E3%80%8D%E6%A9%9F%E7%A8%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%8C%E5%85%AC%E9%96%8B%EF%BC%8F%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94
   - メーカー機種ページ公開とボーナス約1/40特徴を確認。
   - reliability: INDUSTRY
4. パチビー — PYRAMID EYE機種情報
   - https://www.pachibee.jp/machines/index/219090001
   - 2019-10-21導入、BIG/REG確率、完全打ち機械割、払い出し終了条件/平均獲得枚数を確認。
   - reliability: INDUSTRY_ADJACENT
5. ちょんぼりすた — ピラミッドアイ
   - https://chonborista.com/slot/daito-slot/92165/
   - 約22G/50枚、天井非搭載、BIG/REG/合算、通常/完全攻略機械割、朝一恩恵「特に無し」を確認。
   - reliability: ANALYSIS_HIGH
6. 一撃 — PYRAMID EYE 天井/設定変更
   - https://1geki.jp/slot/s_pyramid_eye/3/
   - 天井非搭載、設定変更時/電源OFF→ON時の液晶ステージは当時「現在調査中」と確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
7. K-Navi — PYRAMID EYE
   - https://p-kn.com/slot/3330/
   - 2019-10-21導入、BIG/REG/合算値を照合。
   - reliability: ANALYSIS_HIGH
8. スロパチくえすと — ピラミッドアイ設定差
   - https://www.slopachi-quest.com/article/pyramideye-settei/
   - 約22G/50枚、天井非搭載、通常/完全攻略機械割、BIG約130枚/REG約40枚を照合。
   - reliability: ANALYSIS_HIGH
9. 2-9伝説 — ピラミッドアイ
   - https://29den.com/pyramideye/
   - 2019-10-21、約22G/50枚、2段階設定、BIG/REG/合算、通常/完全攻略機械割を照合。
   - reliability: ANALYSIS_HIGH
10. パチスロサミットONLINE — PYRAMID EYE
   - https://www.pachislot-summit.com/model/%EF%BD%90%EF%BD%99%EF%BD%92%EF%BD%81%EF%BD%8D%EF%BD%89%EF%BD%84-%EF%BD%85%EF%BD%99%EF%BD%85%E3%83%94%E3%83%A9%E3%83%9F%E3%83%83%E3%83%89%E3%82%A2%E3%82%A4/
   - 導入2019-10-21、大都技研、ノーマルを確認。
   - reliability: INDUSTRY

## missingFields

- 設定変更時の成立済みボーナス/内部状態・開始出目・液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の成立済みボーナス/内部状態の直接契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の成立済みボーナス/内部状態・開始出目・液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一専用公開数値: UNVERIFIED_AFTER_RESEARCH

## conflicts

- `CONFLICT_BASE_ROUNDING_22_VS_23`: 約22G/50枚が複数資料で一致する一方、すろぬー等に約23G/50枚表記。平均化せずcanonical約22Gと差異を保持。

status: COMPLETE_CORE

更新日: 2026-09-09

## 現在地点
- recordCount: **1119**
- latestRecordAdded: **パチスロ ロボットガールズZ**（バルテック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-21_robot-girls-z.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **パチスロ ロボットガールズZ — No.1119**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1118「イノキロードトゥゴッド」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1118件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN**。
- HANDOFF最優先の次機種 **「パチスロ ロボットガールズZ」** をNo.1119としてperformance core + resetBehavior v0.7で登録。
- 導入日はバルテック発表会を報じたパチビーが **2017-08-21から導入予定** と明記し、ちょんぼりすた・すろぱちくえすと・2017年導入日一覧とも一致。
- 型式は検定通過記事・検定通過一覧・中古実機資料で **パチスロロボットガールズZ/AB** を複数照合。検定番号そのものは表記揺れ・型式・メーカー・検定/7S系語を変えて再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 公開天井解析の **777G 33.59〜33.6% / 1000G 66.40〜66.41%** は複数資料で一致する一方、1000G超え（1216G）実戦例が資料に明示されるため、天井到達時の最終恩恵を `CONFLICT_CEILING_EFFECT_ART_DIRECT_VS_POSSIBLE_GUARANTEED_CZ_OR_ANALYSIS_ERROR` として分離保存。

## No.1119 — パチスロ ロボットガールズZ
- manufacturer: **バルテック**
- releaseDate canonical: **2017-08-21**
- formalModelName: **パチスロロボットガールズZ/AB**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ART / CZ / BR非搭載 / ゲーム数天井解析あり**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CEILING_CONFLICT**

### performanceCore
- 設定構成: **1 / 3 / 5 / 7**。
- 機械割: **97.5 / 100.0 / 105.5 / 112.7%**。
- ART初当たり: **1/354.1 / 317.7 / 278.1 / 232.1**。
- ベース: **約46.6G/50枚**（別資料46.7Gは丸め差）。
- ART純増: **約2.0枚/G**。
- ART「フルボッコRUSH」: **初期40G以上（40G+α）**。平均約55Gの解析値は基本値と分離保持。
- 公開天井解析: **777G 33.59〜33.6% / 1000G 66.40〜66.41%**。到達恩恵は1000G超え実戦例のためCONFLICT。

### resetBehavior v0.7
- settingChange: **天井RESET/再セット / 内部状態RESELECT**。
- pure power OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER**。
- explicit stay-setting contract: 純電断表から推測転記せず **UNVERIFIED_AFTER_RESEARCH**。
- resetCeilingDistribution: **777G 33.59〜33.6% / 1000G 66.40〜66.41%**。
- resetInternalStateDistribution: **低確79.69% / 高確19.53% / 超高確0.78%**。
- 高確以上スタート率: **20.31%**。
- resetBenefits: 約1/3で777G側が選ばれ、1000G側比で223G短縮。ただし天井到達恩恵の定義にCONFLICTがあるため「777GでART直撃確定」とは扱わない。
- settingChange stage: **光子力研究所** とする解析あり。純電断時ステージ契約が未固定なので確定判別には使わない。
- morning-only separate mode distribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- machine-specific gakkun / deterministic reset detection: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-08-21群監査 — OPEN
- 登録済み: **No.1118 イノキロードトゥゴッド / No.1119 パチスロ ロボットガールズZ**。
- 2017年導入日順一覧で同日未処理候補: **戦国乙女 Type-A / 花の慶次 天を穿つ戦槍 / ぱちスロ 仮面ライダーBLACK / 神の左手 悪魔の右目**。
- ALL7に同日「めぞん一刻～約束～」表記があるが、これはパチンコ `CRめぞん一刻4 約束` であり本パチスロDB対象外。
- イミソーレ3A等の8月候補は日付を機種個別資料で再監査してから群へ含める。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1119を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1119を再取得。
2. **1119件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN** を正本として継続。
3. 次の未処理候補は **「戦国乙女 Type-A」No.1120**。正式型式・検定番号・performance core + resetBehavior v0.7を収集する。
4. 続いて **花の慶次 天を穿つ戦槍 → ぱちスロ 仮面ライダーBLACK → 神の左手 悪魔の右目** を処理し、8/21全メーカー横断監査後に群CLOSED可否を判定。
5. イミソーレ3A等の8月候補も別系統カレンダー・型式名・メーカーで境界監査して漏れを防ぐ。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1119 パチスロ ロボットガールズZ
- バルテック公式製品ページ: https://www.baltec.co.jp/product/nb2.html
- バルテック公式プレスリリース一覧: https://www.baltec.co.jp/press/press.html
- パチビー プレス発表会: https://www.pachibee.jp/pparticles/view/974
- ニッカンアミューズメント: https://www.nikkansports.com/amusement/pachinko/news/1853731.html
- グリーンべると: https://web-greenbelt.jp/00009739/
- P-WORLD: https://www.p-world.co.jp/machine/database/8447
- ちょんぼりすた: https://chonborista.com/slot/baltec/42647/
- すろぱちくえすと: https://www.slopachi-quest.com/article/robot-girls-z/
- 楽スロ: https://rakuslo.com/robotgirl-tenjyo.html
- P-MEDIA 検定通過: https://p-media.info/%E3%83%9E%E3%82%B8%E3%83%B3%E3%82%AC%E3%83%BC%EF%BD%9A%E7%AD%89%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E3%81%9F%E3%81%A1%E3%81%8C%E7%BE%8E%E5%B0%91%E5%A5%B3%E3%81%AB/
- すろ・ぱち(解) 検定通過一覧: https://kaiseki.sulopachinews.com/archives/2352
- 中古実機型式補助: https://store.shopping.yahoo.co.jp/nakaiticom/20249.html

### 8/21群境界監査
- 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- ロボットガールズZ: https://chonborista.com/slot/baltec/42647/
- 神の左手 悪魔の右目: https://chonborista.com/slot/high-enter/41803/

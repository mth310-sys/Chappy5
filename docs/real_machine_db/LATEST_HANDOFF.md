更新日: 2026-09-11

## 現在地点
- recordCount: **1261**
- latestRecordAdded: **島漢-30**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-21_shima-musuko-30.md`
- chronologicalFrontier: **2019-01-21**
- frontierLatestMachine: **島漢-30 — No.1261**
- schema: **resetBehavior v0.7**
- status: **2019-01-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1259を再取得して開始。
- INDEXは旧スナップショットのためLATEST_HANDOFF + main実レコードを正本として継続。
- handoff指定の島漢について25Φ/30Φの型式・メーカー差を再監査。
- 性能は同一だが、25Φ=`SシマムスコHB1` / 平和、30Φ=`SシマムスコMB1-30` / アムテックスと独立型式・製造元差があるため、全機種方針に従い2レコード化。
- No.1260 `島漢（25Φ）`、No.1261 `島漢-30` を性能コア + resetBehavior v0.7で登録。
- 30ΦはHAZUSEで検定番号 `8S0769` まで固定。25Φ検定番号は十分再探索後も未固定。
- 2019-01-21群は `ぱちスロ ゲッターロボ` が未処理のためOPEN維持。

## No.1260 / No.1261 — 島漢 25Φ / 30Φ
- releaseDateCanonical: **2019-01-21**
- generation/system: **6号機 / AT疑似ボーナス / 完全告知**
- settings: **1 / 2 / 5 / 6**
- 25Φ manufacturer/formalModel: **平和 / `SシマムスコHB1`**
- 30Φ manufacturer/formalModel/certification: **アムテックス / `SシマムスコMB1-30` / `8S0769`**
- 機械割: **97.5 / 99.9 / 104.9 / 110.1%**
- BIG CHANCE: **1/455.1 / 1/406.6 / 1/343.0 / 1/286.3**
- 島CHANCE: **1/425.8 / 1/400.2 / 1/355.1 / 1/333.1**
- 合算: **1/220.0 / 1/201.7 / 1/174.5 / 1/154.0**
- baseGamesPer50: **約50.3G**
- AT純増: **約4.0枚/G**
- BIG CHANCE: **70G / 約280枚**
- 島CHANCE: **30G / 約120枚**
- 通常ゲーム数天井: **約600G**
- スイカ回数天井: **通常時スイカ3回でBIG CHANCE**

### resetBehavior v0.7
- settingChange: **天井G RESET / 内部モード再抽選 / 内部状態再抽選 / 非有利区間へ移行**。
- powerCycle: **天井G・内部モード・内部状態を引継ぎ**。HAZUSEと当時解析で一致。
- carryOver: 据え置きを純電断から完全分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- ceilingAfterReset: 約600G。短縮天井は確認なし。
- resetBenefits: リセット後は内部的にときめき高確スタート濃厚とする当時解析。100G以内当選時BIG優遇。
- numericResetData: リセット後100G以内初当たり実戦値 **約1/337.6**、同区間で当選時BIG比率 **約97%**、その後100G以内連チャン率 **約72%**。いずれも `EMPIRICAL_PUBLIC_VALUE` として解析確定値と分離。
- resetDetection: 朝一100G以内REG=据え置き濃厚、BIG=リセット可能性上昇。前日+当日600G当選=据え置き濃厚、600G超過=リセット濃厚とする解析。ガックン率は未確認。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- アクアビーナスは性能コア/既存CONFLICTを崩さずreset側のみ再監査。
- 設定変更/据え置き/純電断時のボーナス成立後高リプレイ状態・告知待ち状態の契約、朝一ガックン/初期出目/公開数値を検索語・資料系統変更で再探索したが直接資料を固定できず推測補完しない。
- advantageousSectionReset: `NOT_APPLICABLE`（制度前）。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-01-21群
### 登録済み
- No.1257 ぱちスロAKB48 エンジェル
- No.1258 戦国BASARA HEROES PARTY
- No.1259 パチスロ フィーバークィーンII
- No.1260 島漢（25Φ）
- No.1261 島漢-30

### 未処理候補
1. **ぱちスロ ゲッターロボ** — KYORAKU系、2019-01-21全国導入候補。次回No.1262候補として公式/業界/当時解析を再監査。

### 群判定
- **2019-01-21_GROUP_OPEN**。
- ゲッターロボ処理後に全メーカー/別型式/別スペック/PB/地域差監査を実施し、追加なし確認後のみCLOSED。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一性能でも正式型式・製造元・25/30Φ等の明確な派生差は全機種方針に従い独立収録を検討。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- COMPLETE_COREの性能完了判定とreset QA状態を分離。
- 競合値は平均せずCONFLICT保持。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. **No.1262候補 `ぱちスロ ゲッターロボ`** を性能コア + resetBehavior v0.7で収集。
3. 2019-01-21群の全メーカー/別型式/別スペック/PB/地域差を最終監査しCLOSED可否判定。
4. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機まで進める。

## 主要出典 — 取得日 2026-09-11
### 島漢
- DMMぱちタウン: https://p-town.dmm.com/machines/3299
- HAZUSE 島漢-30: https://hazuse.com/machine/pachislot/8S0769/
- すろかい: https://slotkaiseki.hatenablog.com/entry/shimamusuko
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3284/1/72007
- すろぱちくえすと設定: https://www.slopachi-quest.com/article/shimamusuko-settei/
- すろぱちくえすとリセット: https://www.slopachi-quest.com/article/shimamusuko-reset/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/69475/
- 日刊スポーツ: https://www.nikkansports.com/m/amusement/pachislot/news/201811130000380_m.html
- パチビー: https://www.pachibee.jp/pparticles/view/1108

### アクアビーナス QA
- P-WORLD: https://www.p-world.co.jp/machine/database/4492
- 5号機クロニクル: https://5goki.com/heiwa-olympia
- グリーンべると: https://web-greenbelt.jp/00004935/
- パチマガスロマガFREE: https://pachimaga.com/free/special/c8e934bc667b6ad09cfc1125474f943e7dc41e52.php

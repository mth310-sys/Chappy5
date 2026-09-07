# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **858**
- latestRecordAdded: **パチスロ 蒼穹のファフナー**（SANKYO）— 2014-12-15
- latestRecord: `docs/real_machine_db/machines/2014-12-15_pachislot-soukyuu-no-fafner.md`
- chronologicalFrontier: **2014-12-15**
- frontierLatestMachine: **パチスロ 蒼穹のファフナー**
- schema: **resetBehavior v0.7**
- status: **2014-12-15_GROUP_OPEN / NEXT_MACHINE_SEAMASTER_LALA**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.857 `2014-12-08_dororon-enma-kun-mera-mera.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **857件 / 2014-12-08群CLOSED / 2014-12-09以降境界監査待ち**。
- 2014-12-09〜12-14を日付・新台・メーカー表記で境界監査。発売発表・検定情報とホール導入を分離し、今回この期間に新規登録すべき具体日付き5号機本体は安全に固定できなかったため **2014-12-09_TO_12-14_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い具体日 **2014-12-15** に進み、No.858として **パチスロ 蒼穹のファフナー** を登録。

## No.858 — パチスロ 蒼穹のファフナー

- record: `docs/real_machine_db/machines/2014-12-15_pachislot-soukyuu-no-fafner.md`
- manufacturer: **SANKYO**
- releaseDate: **2014-12-15**
- modelName: **パチスロ 蒼穹のファフナーA**
- inspectionNumber: **4S0874**
- systemType: **5号機 ART / CZ / ゲーム数管理 / 疑似ボーナス**

### 性能コア

- ART初当たり: **1/258 / 243 / 232 / 212 / 199 / 194**。
- 機械割 canonical: **97.8 / 98.7 / 99.9 / 103.9 / 106.8 / 110.2%**（K-Navi / HAZUSE / PachiNavi一致）。
- 別二次資料に **97.6 / 98.7 / 100.1 / 102.7 / 106.6 / 110.7%** があるため `CONFLICT_PAYOUT_RATE_SECONDARY_SERIES`。平均しない。
- 50枚ベースは **約32G**（HAZUSE）と **約31G**（二次資料）があり `CONFLICT_BASE_GAMES_PER_50_31_VS_32`。
- ART「蒼穹作戦」: **純増約2.2枚/G**。
- 通常最大天井: **ARTまたはVバトル間999G**。到達時はARTまたはVバトル当選。

### resetBehavior v0.7

- HAZUSE本機固有ページで、設定変更時は **天井までのゲーム数RESET / 内部モード再抽選 / 内部状態再抽選 / 竜宮島ステージ開始** を確認。
- 固定一律のリセット短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 二次解析整理に **設定変更時20%で天国 / 60%で高確** の公開朝一数値あり。ただし今回独立再照合未達のため `ANALYSIS_SINGLE_SECONDARY` として保存しcanonical化しない。
- 据え置き時のゲーム数・モード・状態の直接契約、設定変更なしの純電源OFF→ONは、表記揺れ・型式名・メーカー名・関連語を変えて横断後も `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックンも `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 2019年6号機「蒼穹のファフナーEXODUS」の電断・有利区間仕様は別機種として除外。

## 2014-12-15群 — OPEN

- No.858 **パチスロ 蒼穹のファフナー**（SANKYO）— 処理済み。
- 強い未処理候補: **シーマスター ～ララ、旅立ちのプレリュード～**（山佐）。グリーンべるとは2014-11-17記事で **12月14日納品予定**、旧パチマガスロマガは2014年12月、複数資料で12月中旬ホールデビュー。次回、全国/ホール導入開始を **2014-12-15** と置けるか再照合してから登録する。
- 同日群はまだCLOSEDにしない。ファフナーとシーマスター以外の5号機本体もメーカー横断で再監査する。
- `スーパーラクラクビスカス` は検定日2014-12-15の資料が混入するが、パイオニア公式発表は2014-12-22、内覧会は2015-01-08であり、12/15ホール導入機としては扱わない。

## 次回再開地点

1. **recordCount 858 / chronologicalFrontier 2014-12-15 / 12-15_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.858を再確認。
3. 最優先で **`シーマスター ～ララ、旅立ちのプレリュード～`（山佐）** の導入日を当時業界記事・山佐系資料・HAZUSE/K-Navi/旧解析で固定する。
4. 具体日が2014-12-15で固定できればNo.859候補として性能コア + resetBehavior v0.7を収集。
5. その後2014-12-15同日群を全メーカー横断で最終監査し、漏れがなければCLOSED判定して12-16以降へ進む。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは発表日・検定日・納品予定・全国導入・地域先行・実ホール導入を区別。
- 同名後継機 `蒼穹のファフナーEXODUS` の6号機仕様を2014年機へ混入させない。
- ファフナー機械割と50枚ベースの競合は平均せずCONFLICT維持。
- 20%天国 / 60%高確は単一二次系列として信頼度を落として保持し、再照合前に高信頼へ昇格しない。
- 据え置き・電断挙動は一般論から推定しない。
- 新パネル・検定日だけの候補はホール導入日と混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ 蒼穹のファフナー
- HAZUSE: https://hazuse.com/machine/pachislot/4S0874/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0874/genre/201/
- K-Navi: https://p-kn.com/slot/2158/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2498/1/50326
- 当時天井解析: https://mezase20.com/fafner.html
- 天井整理: https://www.slopachi-quest.com/article/fafner-in-the-azure-tenzyou/
- 設定変更二次整理: https://rakuslo.com/fafner-setteisa.html
- PachiNavi: https://pachinavi.net/machines/fafner-1/
- みんスロ: https://minslo.com/%E8%92%BC%E7%A9%B9%E3%81%AE%E3%83%95%E3%82%A1%E3%83%95%E3%83%8A%E3%83%BC/

### 次候補 / 境界
- グリーンべると シーマスター発表: https://web-greenbelt.jp/00007409/
- 娯楽産業 シーマスター発表: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E3%80%8C%E3%82%B7%E3%83%BC%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC-%E3%80%9C%E3%83%A9%E3%83%A9%E3%80%81%E6%97%85%E7%AB%8B%E3%81%A1%E3%81%AE%E3%83%97%E3%83%AC%E3%83%AA%E3%83%A5/
- 旧パチマガスロマガ シーマスター: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/200/a.php
- パイオニア更新履歴: https://www.slot-pioneer.co.jp/news.html

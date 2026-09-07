# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **857**
- latestRecordAdded: **Dororonえん魔くん メ～ラめら**（KPE）— 2014-12-08
- latestRecord: `docs/real_machine_db/machines/2014-12-08_dororon-enma-kun-mera-mera.md`
- chronologicalFrontier: **2014-12-08**
- frontierLatestMachine: **Dororonえん魔くん メ～ラめら**
- schema: **resetBehavior v0.7**
- status: **2014-12-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2014-12-09_ONWARD**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.856 `2014-12-01_pachislot-areddin.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **856件 / 2014-12-01群CLOSED / 2014-12-02〜12-07境界CLOSED / 2014-12-08群OPEN**。
- No.857として **Dororonえん魔くん メ～ラめら** を登録。
- 2014-12-08同日群を日付・メーカー・K-Navi/HAZUSE系で再監査。アナザーゴッドハーデスの「NO MORE DOG ver.」は新パネルであり新型式機種として重複登録しない。今回、えん魔くん以外の新規5号機本体を安全に固定できなかったため **2014-12-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## No.857 — Dororonえん魔くん メ～ラめら

- record: `docs/real_machine_db/machines/2014-12-08_dororon-enma-kun-mera-mera.md`
- manufacturer: **KPE**
- releaseDate: **2014-12-08**
- modelName: **ドロロンえん魔くんKN**
- inspectionNumber: **4S0753**
- systemType: **5号機 ART / 疑似ボーナス / CZ / ゲーム数管理**

### 性能コア

- ART初当たり: **1/251.8 / 236.9 / 226.4 / 195.0 / 168.7 / 127.7**。
- 機械割 canonical: **97.1 / 98.5 / 100.2 / 104.2 / 109.6 / 112.8%**。
- 設定5のみK-Navi/HAZUSEが **109.9%** のため `CONFLICT_PAYOUT_RATE_SETTING5_109_6_VS_109_9`。平均しない。
- 50枚ベース: **約31G**（旧パチマガスロマガ）。
- ART「ハルマゲどんタイム」: **40G+α / 純増約2.3枚/G**。
- ドロロンボーナス: **30G**、ハ～トふるボーナス: **10G+α**。

### resetBehavior v0.7

- 設定変更時は**天井ゲーム数リセット**、内部モード再抽選。
- モード別天井: **通常A 996G / 通常B 696G / 天国96G / 超天国32G**。
- 設定変更時モード振り分け:
  - 設1: A27.4 / B50.0 / 天国22.5 / 超天国0.1%
  - 設2: A18.9 / B60.0 / 天国21.0 / 超天国0.1%
  - 設3: A22.4 / B52.0 / 天国25.5 / 超天国0.1%
  - 設4: A14.9 / B62.5 / 天国22.5 / 超天国0.1%
  - 設5: A19.4 / B55.0 / 天国25.5 / 超天国0.1%
  - 設6: A9.9 / B65.0 / 天国25.0 / 超天国0.1%
- 通常B以上合計は **設1 72.6% → 設6 90.1%**。設定1でも天国+超天国 **22.6%**。
- 固定一律短縮天井ではなく、**モード再抽選による朝一天井優遇**として扱う。
- 据え置き時の全項目直接契約、純粋な電源OFF→ON、設定変更後初期内部状態、ガックン等は検索語・型式名・メーカー名を変えて横断後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2014-12-08群 — CLOSED_FOR_CURRENT_RESEARCH

- No.857 **Dororonえん魔くん メ～ラめら**（KPE）— 2014-12-08。
- K-Navi / HAZUSE / 当時新台・メーカー系検索で同日群を再監査。
- 2014-12-08導入の「アナザーゴッドハーデス NO MORE DOG ver.」は既存機の新パネルであり、性能物差しDBの新規機種レコードとしては追加しない。
- パチンコ新台を混入させない。

## 次回再開地点

1. **recordCount 857 / chronologicalFrontier 2014-12-08 / 12-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.857を再確認。
3. **2014-12-09以降を日別・メーカー別・当時新台一覧で境界監査**し、最初の未登録5号機の具体的導入日を固定する。
4. 次の強い候補日は **2014-12-15**。`パチスロ 蒼穹のファフナー`、`シーマスター～ララ、旅立ちのプレリュード～` 等を含め、導入日を一次/当時資料で照合してから処理順を確定する。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは発表日・納品予定・全国導入・地域先行・実ホール導入を区別。
- 新パネルは新型式/性能差がない限り別機種として重複登録しない。
- えん魔くん設定5機械割109.6/109.9は平均せずCONFLICT維持。
- 据え置き・電断挙動は一般論から推定しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

- KONAMI公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2014/de/
- KONAMI公式ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2014/mhs_blog_141125.html
- K-Navi: https://p-kn.com/slot/2151/
- K-Navi 設定変更モード: https://p-kn.com/slot/2151/52527/
- HAZUSE: https://hazuse.com/machine/pachislot/4S0753/
- 必勝本: https://p.hisshobon.jp/machine/2480/1/49270
- 旧パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/38/c.php
- パチビー: https://www.pachibee.jp/machines/index/214100004
- グリーンべると: https://news.p-world.co.jp/articles/6903/greenbelt
- 朝一実戦値: https://slotjin.com/slot/dororonenma-reset/
- パチ7回顧: https://pachiseven.jp/articles/detail/11377

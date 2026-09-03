# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **506**
- latestMachineAdded: **マイジャグラー**（北電子 / 2010-09-06）
- latestRecord: `docs/real_machine_db/machines/2010-09-06_my-juggler.md`
- chronologicalFrontier: **2010-09-06**
- frontierLatestMachine: **マイジャグラー**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線505実レコード「デビルマンII ～悪魔復活～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **505** / chronologicalFrontier **2010-08-27**。
- 2010-08-28〜29を境界監査。8/30は505「デビルマンII ～悪魔復活～」のK-Navi/パチビー側導入日として既存レコードへ統合済み。複数系統検索で8/30の別未登録パチスロを明確に確定できなかったため重複追加せず、次の明確な全国導入アンカー2010-09-06へ進んだ。
- 2010-09-06同日群でrepo未登録の「マイジャグラー」を確認し506件目として追加。
- 同日には「パチスロスパイダーマン3」が2010-09-06登場資料で確認できるため、次回同日群の最優先未処理候補。

## 506 — マイジャグラー 要約

- メーカー: **北電子**
- 導入: **2010-09-06**（K-Naviホール導入、グリーンべると納品予定、PachiSeven整理で一致）
- 世代/タイプ: **5号機 / ノーマルタイプ / 完全告知**
- 機械割: **95.7 / 97.9 / 99.9 / 102.8 / 105.3 / 109.4%**
- BIG: **1/287.4 / 1/282.5 / 1/273.1 / 1/264.3 / 1/252.1 / 1/240.9**
- REG: **1/431.2 / 1/364.1 / 1/341.3 / 1/292.6 / 1/277.7 / 1/240.9**
- 合算: **1/172.5 / 1/159.1 / 1/151.7 / 1/138.9 / 1/132.1 / 1/120.5**
- BIG平均約**312枚**、REG平均約**104枚**。
- 50枚/1000円ベースは資料系列差を確認。K-Navi自社調べ **34.51 / 34.72 / 34.94 / 35.09 / 35.31 / 35.84G**、後年解析整理 **34.94 / 35.20 / 35.41 / 35.57 / 35.80 / 36.36G**。定義差の可能性があり平均化せず `CONFLICT`。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_BASE_CONFLICT**

## resetBehavior v0.7 — マイジャグラー

- **設定変更/ゲーム数・天井**: ノーマルタイプで通常ゲーム数天井・周期CZ・ART/AT・ゲーム数解除モードなし。`gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE**。
- **据え置き**: 引き継ぐべき天井G数・AT/ARTストック・ゲーム数モードはなし。ボーナス後BGM条件等の演出用内部カウンタの据え置き時挙動は初代固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 初代固有の初回リール始動・演出用カウンタ・出目/ランプ復帰条件は `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: 朝一狙い目になるAT/ART高確やゲーム数解除モードは `NOT_APPLICABLE`。設定変更専用初当たり優遇等は `NONE_CONFIRMED`。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 短縮天井、高確スタート、CZ優遇等は確認なし。天井進捗消失の不利も構造上なし。
- **変更判別**: 後続マイジャグラーIII/IVおよびジャグラー系資料では朝一1G目のリールガックンが設定変更推測に使えるが、初代マイジャグラー固有の当時一次/高信頼解析を直接確定できなかったため、初代については `INITIAL_MODEL_DIRECT_EVIDENCE_UNVERIFIED_AFTER_RESEARCH`。非ガックン＝据え置き確定ではない。

## conflicts

- baseGamesPer50: K-Navi **34.51〜35.84G** vs 後年解析整理 **34.94〜36.36G**。算出条件が同一と確認できないためCONFLICT保持。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、次回以降recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

### マイジャグラー
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4092/greenbelt`
- K-Navi本機: `https://p-kn.com/slot/1270/`
- K-Navi 1000円あたりゲーム数: `https://p-kn.com/slot/1270/26904/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6066`
- PachiSeven歴代ジャグラー: `https://pachiseven.jp/articles/detail/9823`
- juggler7初代マイジャグラー: `https://juggler7.com/my/`
- パチマガスロマガFREE回顧: `https://pachimaga.com/free/special/602410f33b89225fa4c021fcfe7cef5a9f64acfe.php`
- 後続ガックン補助資料: `https://juggler7.com/my3/` / `https://juggler7.com/my4/`

## 今回のGitHub更新

- 506 マイジャグラー追加: commit `109c50e6d7f7fdd199ad79a9930a3cae541f4961`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 506 / chronologicalFrontier 2010-09-06**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-09-06同日群を継続監査**。最優先未処理候補は **「パチスロスパイダーマン3」（サミー）**。repo重複確認後、未登録なら507件目として性能コア＋resetBehavior v0.7を収集する。
3. 同日群には他機種が存在する可能性があるため、K-Navi/P-WORLD/HAZUSE/パチビー/当時業界記事で9/6全候補を再監査し、スパイダーマン3だけで閉じない。
4. 506の追加QAは、初代マイジャグラー固有の設定変更ガックン直接資料、単純電源OFF→ON、ベース定義差を解消する一次/当時高信頼資料が見つかった場合のみ追補。既存性能コアをやり直さない。
5. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実ファイルpath確定から再開し、既にresetBehavior済みの `2006-11-27_thunder-v-special.md` はスキップする。

更新日: 2026-09-09

## 現在地点
- recordCount: **1053**
- latestRecordAdded: **ドリスタせかんど**（ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-06_dresta-second.md`
- chronologicalFrontier: **2017-03-06**
- frontierLatestMachine: **ドリスタせかんど — No.1053**
- schema: **resetBehavior v0.7**
- status: **2017-03-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1052実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりINDEXより新しい `LATEST_HANDOFF.md` を直近進捗正本として採用。
- 開始時mainは **1052件 / 2017-02-27群CLOSED / 2/28〜3/5境界CLOSED**。
- handoff指定の次カーソル、NET **「ドリスタせかんど」**をNo.1053として登録。
- 性能コア＋resetBehavior v0.7を同時収集。設定変更後には通常時と異なる公開天井周期テーブルがあり、朝一客行動へ直接効くためnumericResetDataまで保存。
- 2017-03-06群はまだOPEN。追加候補として **ビビッドレッド・オペレーション（三洋）**、**パチスロ ゼクスイグニッション（オリンピア/平和系）**を複数系統で確認しているため、全機処理前にCLOSEDにしない。

## No.1053 — ドリスタせかんど
- manufacturer: **ネット**
- releaseDate canonical: **2017-03-06**
- formalModelName: **ドリスタせかんど／NE**
- certificationNumber: **6S1523**
- generation/system: **5号機 / 5.5号機期 / ART / 擬似ボーナス / 周期抽選**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.9 / 98.3 / 100.7 / 104.0 / 106.7 / 110.4%**。
- ART擬似ボーナス初当たり: **1/199 / 186 / 173 / 153 / 137 / 122**。
- SPバトルボーナス: **1/2978 → 1/1683**。
- バトルボーナス: **1/120 → 1/66**。
- ライブボーナス: **1/205 → 1/116**。
- 50枚ベース: **約46.3G/50枚**（別資料は約46G表記）。
- ART純増: **約1.8枚/G**を業界記事・P-WORLD・当時解析で採用。後年まとめに2.0枚表記があるため、1.8をcanonical、2.0は定義/丸め差候補として注記。
- SBB **50G+α**、BB **30G+α**、ライブボーナス **20G/1セット**。

### resetBehavior v0.7
- 通常天井: **最大20周期で擬似ボーナス確定**。平均到達Gは約660〜680Gで周期長により変動。
- 設定変更: **天井周期RESET**。
- 純電源OFF→ON: **天井周期CARRYOVER**。
- 据え置き: 純電断比較に準じ天井周期CARRYOVER。ドリームスター/周期内進捗/内部高低状態の全詳細は直接契約不足のためUNVERIFIED。
- リセット専用天井周期振り分け: **1周期3.1 / 5周期25.0 / 10周期25.0 / 15周期3.1 / 20周期43.8%**。
- 当時解析の天井のみ累積期待度表現: **5周期25.8%、10周期34.8%、15周期6.6%**。
- 設定変更後は5・10周期天井が通常時より大幅優遇され、朝一の主要恩恵として採用。
- 設定変更/電断時ステージ: 当時比較表でも**調査中**。内部状態初期振り分けも十分な再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のメーカー保証ガックン/初期出目/ランプ等の確定変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQuality / conflicts
- exact導入日はHAZUSE・パチビー・期待値見える化・ちょんぼりすた等で2017-03-06が一致。NET公式は2017年3月上旬全国導入予定。
- 天井Gは固定G数ではなく20周期がcanonical。約660G/約680Gは周期長変動・算出条件差として扱い、単純CONFLICTにはしない。
- ART純増は業界発表/P-WORLD/期待値見える化で約1.8枚/G。後年まとめの2.0枚表記は残すがcanonicalは1.8枚/G。

## 2017-03-06群監査
- status: **OPEN**。
- 登録済み: ドリスタせかんど — No.1053。
- 未処理確認済み候補:
  - **ビビッドレッド・オペレーション**（三洋）— 業界記事でA+ART、複数解析で2017-03-06導入。
  - **パチスロ ゼクスイグニッション**（オリンピア/平和系）— 2017年1月業界発表と当時解析を確認。3/06群候補として次々回以降処理。
- 3/06群は少なくとも上記2機が未処理のためCLOSED禁止。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1053を再取得。
2. **1053件 / chronologicalFrontier 2017-03-06 / 3/06群OPEN** を正本として継続。
3. 次の未処理本線は **三洋「ビビッドレッド・オペレーション」**。No.1054候補として正式型式・検定番号・性能コア＋resetBehavior v0.7を収集する。
4. 続いて **パチスロ ゼクスイグニッション**を処理。
5. 3/06同日群を全メーカー横断監査し、追加機がなければCLOSED。その後次の導入境界へ前進。
6. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1053 ドリスタせかんど
- NET公式プレスリリース（DreamNews）: https://www.dreamnews.jp/press/0000145470
- PiDEA: https://www.pidea.jp/articles/%E3%83%8D%E3%83%83%E3%83%88%E3%80%8C%E3%83%89%E3%83%AA%E3%82%B9%E3%82%BF%E3%81%9B%E3%81%8B%E3%82%93%E3%81%A9%E3%80%8D%E3%81%AF%E3%82%AC%E3%83%81%E3%83%A3%E3%82%AC%E3%83%81%E3%83%A3%E6%90%AD%E8%BC%89
- HAZUSE: https://hazuse.com/machine/pachislot/6S1523/
- 期待値見える化: https://slotjin.com/zone/dresta2nd/
- P-WORLD: https://www.p-world.co.jp/machine/database/8266
- パチビー: https://www.pachibee.jp/machines/lecture/217020009

### 次候補 / 3月6日群
- グリーンべると/P-WORLD ビビッドレッド・オペレーション: https://news.p-world.co.jp/articles/8983/greenbelt
- ちょんぼりすた ビビッドレッド・オペレーション: https://chonborista.com/slot/sanyo-slot/31696/
- グリーンべると/P-WORLD ゼクスイグニッション: https://news.p-world.co.jp/articles/8985/greenbelt
- すろぱちくえすと ゼクスイグニッション: https://www.slopachi-quest.com/article/zxignition/

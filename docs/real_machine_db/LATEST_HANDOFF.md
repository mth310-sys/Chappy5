更新日: 2026-09-15

## 現在地点
- recordCount: **1776**
- latestRecordAdded: **スマスロ 攻殻機動隊 — No.1776**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-02-02_smartslot-koukaku-kidoutai.md`
- chronologicalFrontier: **2026-02-02**
- schema: **resetBehavior v0.7**
- status: **2026-02-02_GROUP_OPEN_1_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1775実レコードを再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1776 `スマスロ 攻殻機動隊` を追加。
- 2026-02-02群は現時点で1/6 canonical処理済み。

## No.1776 — スマスロ 攻殻機動隊
- path: `docs/real_machine_db/machines/2026-02-02_smartslot-koukaku-kidoutai.md`
- manufacturer: **サミー**
- formalModel: **Lスマスロ攻殻機動隊ZS**
- inspectionCode: **5S1282**
- releaseDate: **2026-02-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.7 / 100.8 / 104.9 / 109.3 / 112.2%**
- CZInitial: **1/238.0 / 1/236.3 / 1/231.7 / 1/220.9 / 1/214.0 / 1/210.1**
- ATInitial: **1/336.3 / 1/332.0 / 1/319.6 / 1/298.7 / 1/285.8 / 1/278.0**
- base: **約32.0G/50枚**
- netIncrease: **通常AT 約4.0枚/G / 上位AT 約8.5枚/G**
- basicPayout: **通常AT初期200枚 / 上位AT初期300枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1776 resetBehavior v0.7
- 設定変更時は有利区間RESET、天井G RESET+内部加算、リセットモード、内部状態再抽選、殲滅ポイント加算抽選、殲滅テーブル2以上。
- CZ間天井は通常550G+α→設定変更後350G+α、AT間天井は通常999G→699Gへ短縮。
- リセットモードは50G 50.0%、100G 25.0%、150G 50.0%、250G 50.0%、350GでCZ天井。200Gは約50%でタチコマの家出当選。
- 据え置きは有利区間・天井・内部状態・殲滅モード・ゲーム数・殲滅ポイントを引継ぎ。
- 純電源OFF→ONは必勝本の直接比較で天井G、モード、状態、殲滅ポイント、殲滅テーブルを引継ぎ。開始ステージは同資料で調査中。
- 純電断時の有利区間そのものの直接文言は高優先資料で固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 350G+α CZ短縮天井、699G AT短縮天井を超えた場合は据え置き濃厚材料。50/100/150G殲滅ZONEや200GタチコマCZはリセット期待度UP材料だが単独確定ではない。
- 本機固有ガックン条件/発生率は表記揺れ・型式・メーカー込みで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定1リセット時機械割100%以上は解析資料値として保持し、メーカー公表値とは分離。

## conflicts / normalization
- CZ/AT初当り、機械割、ベース、純増は主要複数資料で重大CONFLICTなし。
- AT間天井は `999G` と `999G+α`、設定変更後は `699G` と `699G+α` の表記差あり。前兆分の定義差として扱い、数値競合とはしない。
- 設定変更時の内部状態具体振り分けは一部二次資料に数値掲載があるが、高優先複数照合不足のためcanonicalへ採用しない。

## sources summary
retrievedAt: 2026-09-15
- サミー公式 最速解説動画: https://www.youtube.com/watch?v=0jBzCHpUjiE
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/5S1282/
- 遊技通信/P-WORLD 発表: https://news.p-world.co.jp/articles/32366/yugitsushin
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/88992/
- パチ&スロ必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/88950/
- パチ&スロ必勝本 リセットモード: https://hisshobon.com/machineinfo/88989/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/223/kh01.php
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1096/34848/
- なな徹 リセット数値: https://nana-press.com/kaiseki/machine/1096/34845/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/248703/
- 6確: https://www.kaku6.jp/slot/kokaku/
- スロベース: https://slobase.jp/machines/koukaku
- Altema 朝一判別（補助）: https://altema.jp/pachimo/lkoukakureset

## 2026-02-02 known canonical queue
1. ~~スマスロ 攻殻機動隊 — No.1776 DONE~~
2. **Lパチスロうみねこのなく頃に2 — candidate**
3. **Lパチスロ 炎炎ノ消防隊2 — candidate**
4. **L範馬刃牙 — candidate**
5. **スマスロ ハナビ — candidate**
6. **スマスロ ゴブリンスレイヤーII — candidate**

## 次回再開地点
- 最新mainを再同期しNo.1776と本handoffを確認。
- **No.1777候補「Lパチスロうみねこのなく頃に2」— 2026-02-02** から継続。
- その後 `Lパチスロ 炎炎ノ消防隊2 → L範馬刃牙 → スマスロ ハナビ → スマスロ ゴブリンスレイヤーII` を同日群キューとして処理。
- 6/6完了後、PB・別型式・地域先行・延期/段階導入を再監査して2026-02-02境界をCLOSED判定。
- PARTIAL/UNVERIFIEDは型式・検定番号・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索。

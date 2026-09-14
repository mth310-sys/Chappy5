更新日: 2026-09-15

## 現在地点
- recordCount: **1777**
- latestRecordAdded: **Lパチスロうみねこのなく頃に2 — No.1777**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-02-02_umineko-no-naku-koro-ni-2.md`
- chronologicalFrontier: **2026-02-02**
- schema: **resetBehavior v0.7**
- status: **2026-02-02_GROUP_OPEN_2_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1776を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 並行更新を確認し、旧再開地点No.1767ではなく最新mainのNo.1776後から継続。
- No.1777 `Lパチスロうみねこのなく頃に2` を追加。
- 2026-02-02群は現時点で2/6 canonical処理済み。

## No.1777 — Lパチスロうみねこのなく頃に2
- path: `docs/real_machine_db/machines/2026-02-02_umineko-no-naku-koro-ni-2.md`
- manufacturer: **オーイズミ / オーイズミ・アミュージオ**
- formalModel: **Lうみねこのなく頃に2A1**
- inspectionCode: **530674**
- releaseDate: **2026-02-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **98.4 / 99.6 / 101.2 / 103.4 / 104.7 / 105.5%**
- full攻略 payoutRate: **103.0 / 104.1 / 105.8 / 108.0 / 109.2 / 110.0〜110.2% CONFLICT**
- BIG: **1/362.1 / 1/350.5 / 1/337.8 / 1/327.7 / 1/319.7 / 1/313.6**
- REG: **1/397.2 / 1/390.1 / 1/381.0 / 1/374.5 / 1/366.1 / 1/360.1**
- combined: **1/189.4 / 1/184.6 / 1/179.1 / 1/174.8 / 1/170.7 / 1/167.6**
- base: **約33.6G/50枚（設定1）**
- netIncrease: **ART 約1.0枚/G**
- basicPayout: **同色BIG最大202枚 / 異色BIG最大160枚 / REG最大56枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1777 resetBehavior v0.7
- 設定変更時は有利区間RESET、内部状態RESET。一方でRT状態と周期までのゲーム数は原則引継ぎ。
- 通常時以外で設定変更した場合はCZ「運命分岐モード」から開始。
- CZ周期は通常時200G固定。設定変更専用の天井短縮数値は確認なし。
- 据え置きは有利区間・RT状態・周期G数・内部状態を引継ぎ。
- 純電源OFF→ONはRT状態・周期G数・内部状態を引継ぎ、時計UIは一旦0時0分表示後、ステージチェンジで引継いだ時刻へ更新。
- 純電断時の有利区間そのものの直接文言は高優先資料で固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 朝一は設定変更/据え置きとも戦人ステージ・時計0時0分表示で、これだけでは判別不可。
- ボーナス終了画面「縁寿ダイブ」は設定変更濃厚、「屋敷の正面玄関」は設定上げ濃厚。有利区間ランプでは設定変更/据え置き判別不可。
- 本機固有ガックン条件/発生率は表記揺れ・正式型式・メーカー込みで再探索後も高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の時計内部初期時間の具体振り分け、リセット専用初当り/CZ確率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts / normalization
- 設定6完全攻略時出玉率は `110.0%` と `110.2%` が競合。1geki・6確は110.2%、別系統複数資料は110.0%のため平均化せずCONFLICT保持。
- なな徹の設定変更比較表には `天井: RESET` と `周期までのゲーム数: 引継ぎ` が同時掲載され、1gekiは `周期天井ゲーム数: 引継ぎ`。200G周期進行は引継ぎをcanonicalとし、一般項目「天井RESET」の定義対象は `CONFLICT_DEFINITION_UNRESOLVED`。
- HAZUSEのカテゴリ表示はスマスロATだが、メーカー発表・業界・複数解析はA+完走型ARTで一致するためA+ARTをcanonicalとする。

## sources summary
retrievedAt: 2026-09-15
- HAZUSE: https://hazuse.com/machine/pachislot/SX0120/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-18278/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10005073/
- パチビー 発表会: https://www.pachibee.jp/pparticles/view/1336
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225120001
- 必勝本 通常時: https://hisshobon.com/machineinfo/88765/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/88767/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/60/kh01.php
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1089/34706/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1089/34707/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1089/34703/
- 1geki 機種: https://1geki.jp/slot/l_umineko2/
- 1geki 朝一: https://1geki.jp/slot/l_umineko2/3/
- 6確: https://www.kaku6.jp/slot/umineko2/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/247637/
- ジャグラーズネット補助: https://jugglersnet.com/chumoku/umineko2

## 2026-02-02 known canonical queue
1. ~~スマスロ 攻殻機動隊 — No.1776 DONE~~
2. ~~Lパチスロうみねこのなく頃に2 — No.1777 DONE~~
3. **Lパチスロ 炎炎ノ消防隊2 — candidate**
4. **L範馬刃牙 — candidate**
5. **スマスロ ハナビ — candidate**
6. **スマスロ ゴブリンスレイヤーII — candidate**

## 次回再開地点
- 最新mainを再同期しNo.1777と本handoffを確認。
- **No.1778候補「Lパチスロ 炎炎ノ消防隊2」— 2026-02-02** から継続。
- その後 `L範馬刃牙 → スマスロ ハナビ → スマスロ ゴブリンスレイヤーII` を同日群キューとして処理。
- 6/6完了後、PB・別型式・地域先行・延期/段階導入を再監査して2026-02-02境界をCLOSED判定。
- PARTIAL/UNVERIFIEDは型式・検定番号・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索。

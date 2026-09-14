更新日: 2026-09-15

## 現在地点
- recordCount: **1797**
- latestRecordAdded: **LB スロット GALFY — No.1797**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-05-25_lb-slot-galfy.md`
- chronologicalFrontier: **2026-05-25**
- schema: **resetBehavior v0.7**
- status: **2026-05-25_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1796を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 開始時点でNo.1796 `スマスロ ビッグドリーム THE GOLDEN PUSHER` まで進行済みだったため、既存性能値をやり直さずNo.1797候補から継続。
- No.1797 `LB スロット GALFY` を追加し、性能コアとresetBehavior v0.7を同時収集。
- オーイズミ公式IRで型式 `LB スロットガルフィーA4`、メーカー `オーイズミ・アミュージオ` を確認。情報島+検定記事、HAZUSE/1gekiで型式・検定番号 `5S1315`・2026-05-25導入を照合。
- 設定はL/1/2/5/6。canonical通常機械割は1/2/5/6で `98.2/99.9/103.5/106.2%`、完全攻略 `100.3/102.2/105.9/108.7%`。
- BIG(BT) `1/295.2 / 1/292.6 / 1/284.9 / 1/277.7`、REG `1/399.6 / 1/360.1 / 1/312.1 / 1/277.7`、合算 `1/169.8 / 1/161.4 / 1/148.9 / 1/138.8`。
- ベース約35.7G/50枚（設定1）。BIG最大308枚または448枚以上、REG最大103枚。リアルボーナスBT機のため純増はN/A。
- 天井非搭載。ゲーム数/周期/ポイント/スルー天井、リセット天井短縮、朝一専用モードによる天井狙い要素は `NOT_APPLICABLE` / `NONE_CONFIRMED`。
- 朝一は設定に応じた通常のボーナス抽選とされ、設定変更専用の初当たり優遇数値は確認されていない。
- 設定変更/据え置き/純電源OFF→ONのリアルボーナス成立フラグ・BT/JAC権利の厳密な三者比較、有利区間そのものの直接文言、本機固有ガックンは、型式/メーカー/表記揺れと検索語を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。一般則から推測していない。
- G-netの出玉率レンジ（設定1 97.6～98.2%、設定2 99.4～99.9%、設定5 102.6～103.5%、設定6 105.6～106.2%）は複数解析サイトの通常掲載値と定義差があるため平均せず別定義保持。
- メーカー表記はオーイズミ/オーイズミ・アミュージオが混在するが、公式IRがメーカー=オーイズミ・アミュージオと明記するため製造元canonicalをオーイズミ・アミュージオとした。
- 情報島+過去新台一覧で2026-05-25のパチスロは `LB スロット GALFY` の1機のみ。PB・別型式・延期/段階導入を再監査し、**2026-05-25群 CLOSED 1/1**。

## No.1797 — LB スロット GALFY
- path: `docs/real_machine_db/machines/2026-05-25_lb-slot-galfy.md`
- manufacturer: **オーイズミ・アミュージオ製造 / オーイズミ**
- formalModel: **LBスロットガルフィーA4**
- inspectionCode: **5S1315**
- releaseDate: **2026-05-25**
- settings: **L / 1 / 2 / 5 / 6**
- payoutRate: **98.2 / 99.9 / 103.5 / 106.2%**
- fullTechnicalPayout: **100.3 / 102.2 / 105.9 / 108.7%**
- BIG(BT): **1/295.2 / 1/292.6 / 1/284.9 / 1/277.7**
- REG: **1/399.6 / 1/360.1 / 1/312.1 / 1/277.7**
- combined: **1/169.8 / 1/161.4 / 1/148.9 / 1/138.8**
- base: **約35.7G/50枚（設定1）**
- netIncrease: **N/A（リアルボーナスBT）**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1797 resetBehavior v0.7
- 設定変更: 天井・ゲーム数モード・周期/ポイント/スルー短縮はN/A。朝一は設定に応じた通常ボーナス抽選。内部フラグの厳密契約はUNVERIFIED_AFTER_RESEARCH。
- 据え置き: 天井系引継ぎはN/A。BT/JAC等の機種固有三者比較はUNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON: 天井/モード狙い要素なし。リアルボーナス成立フラグ・BT/JAC権利の直接比較はUNVERIFIED_AFTER_RESEARCH。
- ゲーム数/天井: 天井非搭載。
- モード/状態: 朝一専用内部モード・高確による天井狙い要素なし。3演出モードはユーザー選択の演出モードでありresetBehaviorの内部モードと分離。
- 有利区間: 設定変更/据え置き/純電断の直接文言を固定できずUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
- 朝一恩恵: 天井短縮なし、リセット専用初当たり優遇値なし。
- 朝一不利: 固定ペナルティ/不利専用モードはNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 確実な変更判別は調査中。本機固有ガックン条件/発生率はUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値: リセット専用数値なし。

## conflicts / normalization
- G-net販売資料の機械割レンジは、複数解析の通常掲載値/完全攻略値とは定義が異なるため別定義保持。平均化しない。
- 製造元表記は公式IRを優先してオーイズミ・アミュージオ。親会社/発売発表側としてオーイズミを併記。
- resetBehaviorは「天井がない=電源操作の全内部状態が同じ」と推定せず、公開確認できた朝一狙い上の差がない部分と、低レベル内部契約の未確認部分を分離した。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで実体を一意固定できない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1797:
- オーイズミ公式IR: https://oizumi.co.jp/wp-content/uploads/2026/03/7c7210608798efdd57bfff9e9451df4e.pdf
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-24744/
- 情報島+ 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1315/
- 1geki: https://1geki.jp/slot/lb_galfy/
- 1geki オンライン遊技説明: https://1geki.jp/slot/lb_galfy/39/
- パチビー: https://www.pachibee.jp/machines/index/226040004
- 6確: https://www.kaku6.jp/slot/galfy/
- ジャグラーズネット: https://jugglersnet.com/bt/galfy
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/257968/
- G-net: https://g-net-ps.com/info/s0266/
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/33478/greenbelt

## 2026-05-25 canonical queue — CLOSED 1/1
1. ~~LB スロット GALFY — No.1797 DONE~~

次境界:
- 2026-06-08 known canonical candidates:
  1. **L戦国乙女5 業火を穿つ宿焔の双刃 — candidate No.1798**
  2. **スマスロ BIRDIE WING -Golf Girls' Story-**
  3. **スロット ソードアート・オンラインⅡ**
- 2026-06-22: **スマート沖スロ ダークハイビ**

## 次回再開地点
- 最新mainを再同期しNo.1797と本handoffを確認。
- **No.1798候補「L戦国乙女5 業火を穿つ宿焔の双刃」— 2026-06-08** から継続。
- 2026-06-08群は情報島+導入前後記事で `戦国乙女5 / BIRDIE WING / ソードアート・オンラインⅡ` の3機が一致。PB・別型式・地域先行・延期/段階導入を再監査してcanonical queueを確定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。

更新日: 2026-09-15

## 現在地点
- recordCount: **1789**
- latestRecordAdded: **LB トリプルクラウンセブン — No.1789**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-06_lb-triple-crown-seven.md`
- chronologicalFrontier: **2026-04-06**
- schema: **resetBehavior v0.7**
- status: **2026-04-06_BOUNDARY_CLOSED_6_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1788を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 並行リレーがNo.1788「真打 吉宗」まで進行済みだったため、旧再開地点へ戻らず次の未処理No.1789から継続。
- No.1789 `LB トリプルクラウンセブン` を追加し、性能コアとresetBehavior v0.7を同時収集。
- 岡崎産業公式PRで型式 `LBTCSFG`、スマスロ+BT、2026-04-06全国導入を確認。1gekiで検定番号 `5S1007` を確認。
- 公開設定は1/2/5/6。機械割97.5/99.0/105.0/112.1%、BB 1/258.0→1/203.5、RB 1/590.4→1/464.8、合算1/179.6→1/141.5、設定1ベース約34.6G/50枚。
- BIG平均312枚（初回195枚+BT平均）、BB in BB平均507枚、REG平均104枚。
- 天井・周期・ポイントは非搭載。設定変更専用の天井短縮・朝一モード・初当たり/CZ優遇は確認されず、朝一狙い恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- コンプリート機能による打ち止め状態は設定変更で解除されることを確認。
- BT中/成立済みボーナス等の特殊途中状態について、設定変更/据え置き/純電断の直接比較、有利区間の機種固有3条件比較は再探索後も未固定としてUNVERIFIED。
- 必勝本の設定変更&電源OFF/ON比較ではリールガックンは双方「現在調査中」。確定的変更判別手段も未固定。
- 低優先サイトの設定3/4数値はサイト自身が推定と明記しているためcanonical不採用。
- 情報島の2026-04-06導入前一覧が6機を明示し、他の月間整理・各機種導入資料と照合。PB・別型式・地域先行・延期/段階導入の追加canonical機を固定できなかったため2026-04-06群をCLOSED 6/6とした。

## No.1789 — LB トリプルクラウンセブン
- path: `docs/real_machine_db/machines/2026-04-06_lb-triple-crown-seven.md`
- manufacturer: **岡崎産業**
- formalModel: **LBTCSFG**
- inspectionCode: **5S1007**
- releaseDate: **2026-04-06**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **97.5 / 99.0 / 105.0 / 112.1%**
- BB: **1/258.0 / 1/253.0 / 1/230.0 / 1/203.5**
- RB: **1/590.4 / 1/580.0 / 1/524.3 / 1/464.8**
- combined: **1/179.6 / 1/176.2 / 1/159.8 / 1/141.5**
- base: **約34.6G/50枚（設定1）**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1789 resetBehavior v0.7
- 設定変更: 天井/周期/ポイント非搭載。朝一専用短縮・モード優遇・初当たり優遇なしを確認。打ち止め状態は設定変更で解除。BT/成立ボーナス途中状態はUNVERIFIED。
- 据え置き: 天井/周期/ポイント引継ぎはN/A。BT/成立ボーナス途中状態の直接契約はUNVERIFIED。
- 純電源OFF→ON: 天井非搭載。BT/成立ボーナス途中状態の復帰はUNVERIFIED。
- ゲーム数・天井: NONE / N/A。
- モード・状態: 朝一専用モードなし。内部特殊状態の3条件比較はUNVERIFIED。
- 有利区間: 機種固有の設定変更/据え置き/純電断3条件直接文言を固定できずUNVERIFIED。
- 朝一恩恵/不利: 遊技上の専用恩恵・不利要素はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: リールガックンは設定変更/電源OFF→ONとも必勝本で「現在調査中」。確定的判別手段はUNVERIFIED。
- 公開朝一数値: リセット天井/モード振り分け/専用初当たり率はN/Aまたは公開確認なし。

## conflicts / normalization
- No.1789主要公開スペックは1geki・HAZUSE・必勝本等で一致し重大CONFLICTなし。
- 低優先サイトの設定3/4スペックは推定補完と明記されているため `NON_CANONICAL_ESTIMATE_EXCLUDED`。
- 同低優先表記の合算1/179.5（設定1）/1/159.9（設定5）は、高優先複数資料の1/179.6/1/159.8と差があるためcanonical不採用。
- 過去No.1787のsetting4リセット天井700Gに関する91.41% vs 91.94%競合は既存レコード側で保持済み。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1789:
- 岡崎産業公式PR: https://prtimes.jp/main/html/rd/p/000000006.000178173.html
- 1geki機種概要: https://1geki.jp/slot/lb_triplecrown_seven/
- 1geki設定差: https://1geki.jp/slot/lb_triplecrown_seven/0/
- 1gekiベース: https://1geki.jp/slot/lb_triplecrown_seven/4/
- 1gekiBB/BT: https://1geki.jp/slot/lb_triplecrown_seven/61/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1007/
- 必勝本: https://p.hisshobon.jp/vpage/2771/2
- パチマガスロマガ系: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/85/kh01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10455
- パチビー: https://www.pachibee.jp/machines/kouryaku/226030005
- 情報島 2026-04-06新台群: https://p-johojima.jp/colum/post-29369/

boundary 2026-04-06:
- 情報島: https://p-johojima.jp/colum/post-29369/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/
- 岡崎産業公式PR: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

next boundary 2026-04-20:
- 情報島 4/20導入前評価: https://p-johojima.jp/colum/post-30468/
- 情報島 4/20導入後評価: https://p-johojima.jp/colum/post-30920/
- P-Summa月間整理: https://psumma.jp/pachislo/69812/

## 2026-04-06 canonical queue — CLOSED 6/6
1. ~~A-SLOT+ 異世界かるてっと BT — No.1784 DONE~~
2. ~~Lアクダマドライブ — No.1785 DONE~~
3. ~~スマスロヨルムンガンド — No.1786 DONE~~
4. ~~L虚構推理 — No.1787 DONE~~
5. ~~真打 吉宗 — No.1788 DONE~~
6. ~~LB トリプルクラウンセブン — No.1789 DONE~~

## 次回候補キュー — 2026-04-20
情報島の導入前/導入後評価で同日3機が一致:
1. **スマスロ ミリオンゴッド-神々の軌跡- — candidate No.1790**
2. アニマルスロット ドッチ
3. Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE

## 次回再開地点
- 最新mainを再同期しNo.1789と本handoffを確認。
- **No.1790候補「スマスロ ミリオンゴッド-神々の軌跡-」— 2026-04-20** から継続。
- 3機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2026-04-20境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。

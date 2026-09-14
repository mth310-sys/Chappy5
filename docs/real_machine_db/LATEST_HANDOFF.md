更新日: 2026-09-15

## 現在地点
- recordCount: **1796**
- latestRecordAdded: **スマスロ ビッグドリーム THE GOLDEN PUSHER — No.1796**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-05-11_big-dream-the-golden-pusher.md`
- chronologicalFrontier: **2026-05-11**
- schema: **resetBehavior v0.7**
- status: **2026-05-11_BOUNDARY_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1795を再同期。
- 開始時main HEADは `366b2509cf54ab4584c1e7fe8f37a7ef6a96c09c`、No.1795まで進行済みだったためNo.1796から継続。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1796 `スマスロ ビッグドリーム THE GOLDEN PUSHER` を追加し、性能コアとresetBehavior v0.7を同時収集。
- 型式 `L ビッグドリーム KR`、検定番号 `531040`、銀座製造/サミー、導入日2026-05-11を業界発表・検定告示・HAZUSE等で固定。
- 設定1〜6。JUDGEMENT 1/337.7〜1/303.4、AT初当り1/629.3〜1/536.2、機械割97.4/98.8/100.1/104.4/106.5/111.3%。
- ベース約30.7G/50枚、AT純増約8.2枚/G、AT初期300枚以上。
- 通常AT間天井最大1499G、設定変更後は333/555/999Gのいずれかとなり最大999Gへ短縮。
- 必勝本の設定変更/電源OFF→ON直接比較で、設定変更時は天井G RESET、ボール/進行状態/ステーション再抽選、高確/ドリームメーターRESET。純電断は天井G・ボール進行・高確を引継ぎ。
- 据え置き独立比較は高優先公開資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。純電断のボールそのもの/ステーション/ドリームメーター/ステージも公開高優先資料では調査中。
- 設定変更時天井振り分けを公開値で保存。設定1は999G 79.7% / 555G 16.4% / 333G 3.9%、設定6は66.4% / 23.4% / 10.2%。
- ボールポイント規定回数は設定変更/有利区間リセット時に再抽選され、設定1では100個以下が約45%選択される解析を保存。
- 本機固有ガックン/開始ステージ確定判別、据え置き/純電断の有利区間直接文言は再探索後もUNVERIFIED。
- PShortのメーカー「エクサム」・機械割97.4〜107.2%は銀座製造/サミーおよび複数高優先資料と競合。平均せず `CONFLICT_LOW_PRIORITY_LIKELY_MIXED_OR_ERRONEOUS_DATA` としてcanonical不採用。
- 2026-05-11導入群は複数資料で `バイオハザードRE:3 / スーパーリオエース2 / Lタクトオーパス デスティニー / ビッグドリーム THE GOLDEN PUSHER` の4機一致を再監査し、**CLOSED 4/4**へ移行。

## No.1796 — スマスロ ビッグドリーム THE GOLDEN PUSHER
- path: `docs/real_machine_db/machines/2026-05-11_big-dream-the-golden-pusher.md`
- manufacturer: **銀座製造 / サミー**
- formalModel: **L ビッグドリーム KR**
- inspectionCode: **531040**
- releaseDate: **2026-05-11**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.8 / 100.1 / 104.4 / 106.5 / 111.3%**
- JUDGEMENT: **1/337.7 / 1/333.3 / 1/326.6 / 1/316.4 / 1/311.4 / 1/303.4**
- AT: **1/629.3 / 1/615.3 / 1/599.1 / 1/562.6 / 1/551.1 / 1/536.2**
- base: **約30.7G/50枚**
- netIncrease: **AT約8.2枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1796 resetBehavior v0.7
- 設定変更: 天井G RESET。333/555/999Gへ再抽選。ボール/進行状態/ステーション再抽選、高確/ドリームメーターRESET。
- 据え置き: 独立した機種固有三者比較を高優先公開資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: 天井G・ボール進行状態・メダル発射量増加高確・ボールゲット高確を引継ぎ。ボール/ステーション/ドリームメーター/ステージは調査中。
- ゲーム数/天井: 通常最大1499G → 設定変更後最大999G。
- モード: 独立した名称付き通常モード契約はUNVERIFIED。天井ゲーム数抽選は公開値あり。
- 状態: 設定変更時は主要高確RESET、ボール進行等再抽選。純電断は確認済み項目を引継ぎ。
- 有利区間: 設定変更時RESETを二次資料で支持。通常営業中のエンディング後有利区間RESET→上位ATは確認するが朝一恩恵へ混同しない。据え置き/純電断直接文言はUNVERIFIED。
- 朝一恩恵: 最大天井500G短縮。設定1で20.3%、設定6で33.6%が555G以下。設定1ではボールポイント100個以下が約45%。
- 朝一不利: 前日蓄積状態の消失以外、固定不利専用モード/公開ペナルティ値 `NONE_CONFIRMED_AFTER_RESEARCH`。
- 変更判別: 朝一999G超AT非当選は据え置き推測材料。本機固有ガックン/開始ステージ確定判別はUNVERIFIED。
- 公開朝一数値: 設定別333/555/999G振り分け、設定1ボールポイント100個以下約45%。

## conflicts / normalization
- canonical基本スペックは必勝本系/HAZUSE/ジャグラーズネット/複数解析で一致する **97.4/98.8/100.1/104.4/106.5/111.3%**、AT **1/629.3〜1/536.2**、JUDGEMENT **1/337.7〜1/303.4**、ベース約30.7G/50枚、純増約8.2枚/G。
- PShort掲載のメーカー「エクサム」、機械割 `97.4/98.5/99.8/102.1/104.5/107.2%` は高優先複数資料と競合するため `CONFLICT_LOW_PRIORITY_LIKELY_MIXED_OR_ERRONEOUS_DATA`、canonical不採用。
- エンディング後有利区間リセットの上位AT恩恵は設定変更朝一と別契約として分離。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで実体を一意固定できない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1796:
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/32992/yugitsushin
- 情報島+ 検定情報: https://p-johojima.jp/new_machine/post-26079/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0129/
- パチビー: https://www.pachibee.jp/machines/index/226040003
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89512/
- 必勝本 天井ゲーム数抽選: https://hisshobon.com/machineinfo/102174/
- 必勝本 ボールポイント抽選: https://hisshobon.com/machineinfo/102178/
- 必勝本 エンディング: https://hisshobon.com/machineinfo/89522/
- 1geki 天井/朝一: https://1geki.jp/slot/l_bigdream/3/
- パチマガスロマガ 朝一/設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/226/kr01.php
- スロパチクエスト: https://www.slopachi-quest.com/article/biggudoriimu-the-golden-pusher-tenjou/
- 6確: https://www.kaku6.jp/slot/bigdream/
- 2026年5月導入群監査: https://slobase.jp/articles/2026-05-new-machines-roundup

## 2026-05-11 canonical queue — CLOSED 4/4
1. ~~スマスロ バイオハザードRE:3 — No.1793 DONE~~
2. ~~スマスロスーパーリオエース2 — No.1794 DONE~~
3. ~~Lタクトオーパス デスティニー — No.1795 DONE~~
4. ~~スマスロ ビッグドリーム THE GOLDEN PUSHER — No.1796 DONE~~

次境界:
- 2026-05-25: **LB スロット GALFY — candidate No.1797**

## 次回再開地点
- 最新mainを再同期しNo.1796と本handoffを確認。
- **No.1797候補「LB スロット GALFY」— 2026-05-25** から継続。
- 5/25群をPB・別型式・地域先行・延期/段階導入まで再監査してcanonical queueを確定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。

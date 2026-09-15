更新日: 2026-09-15

## 現在地点
- recordCount: **1809**
- latestRecordAdded: **L邪神ちゃんドロップキック — No.1809**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_l-jashinchan-dropkick.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_1_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1808を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 2026年7月境界を月間新台一覧で再監査。2026年7月のパチスロ新台は7/6の既処理7機のみとする複数整理を確認し、7月後半に新規本体導入を固定できずCLOSEDを維持。
- 次の確定群2026-08-03へ進み、No.1809 `L邪神ちゃんドロップキック` を追加。
- SANYO公式、必勝本、6確、ちょんぼりすた、なな徹、スロベース、こぜログ等を横断。
- 型式 `L邪神ちゃんドロップキックTX`、検定番号 `5S1821`、サンスリー/SANYO、2026-08-03導入を固定。
- 設定1〜6機械割 `97.8 / 98.6 / 100.4 / 106.1 / 110.4 / 114.1%`、ボーナス `1/253.1 → 1/210.0`、AT `1/758.2 → 1/606.2`。
- ベース約30.7G/50枚、メインAT純増約2.5枚/G、ボーナス/上位AT約5.0枚/G、AT 50G+α。
- 通常最大天井799G+α。設定変更後は最大599G+αへ短縮し、通常C or 天国濃厚、いずれか1ラインのポイント周期天井が1周期へ短縮。
- 据え置き/純電断は天井・内部モード・ラインポイント引継ぎとする直接整理を確認。
- 設定変更時の有利区間そのものの機種固有高優先直接文言、通常C/天国具体比率、ガックンは再探索後もUNVERIFIED。

## No.1809 — L邪神ちゃんドロップキック
- path: `docs/real_machine_db/machines/2026-08-03_l-jashinchan-dropkick.md`
- manufacturer: **サンスリー / SANYO**
- formalModel: **L邪神ちゃんドロップキックTX**
- inspectionNumber: **5S1821**
- releaseDate: **2026-08-03**
- payoutRate: **97.8 / 98.6 / 100.4 / 106.1 / 110.4 / 114.1%**
- bonus: **1/253.1 / 1/248.1 / 1/241.6 / 1/222.5 / 1/211.8 / 1/210.0**
- AT: **1/758.2 / 1/746.3 / 1/722.8 / 1/655.9 / 1/615.9 / 1/606.2**
- base: **約30.7G/50枚**
- netIncrease: **メインAT約2.5枚/G / ボーナス・上位AT約5.0枚/G**
- basicPayout: **人生シアター 50G+α**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1809 resetBehavior v0.7
- 設定変更: 最大天井799→599G+α、通常C or 天国濃厚、いずれか1ライン周期天井1周期。
- 据え置き: 天井・内部モード・ラインポイント引継ぎ（解析直接整理）。
- 純電断: 天井・内部モード・ラインポイント引継ぎ（解析直接整理）。
- モード: 通常C or 天国濃厚。具体比率はUNVERIFIED。
- 状態: 独立した高確/低確再抽選テーブルはUNVERIFIED。
- 有利区間: 設定変更時の機種固有高優先直接文言はUNVERIFIED_AFTER_RESEARCH。
- 朝一恩恵: 天井短縮 + モード優遇 + 1ライン周期短縮。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 599G超過は据え置き推測材料。ガックン/即時UI確定条件はUNVERIFIED。

## conflicts / normalization
- 通常B天井: なな徹等749G vs 一部599G+α。複数高優先一致の749Gをcanonical、後者を `CONFLICT_NORMAL_B_CEILING` として保持。
- サンスリー/SANYOのブランド表記は併記。

## 2026-08-03 canonical queue — OPEN 1/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. スマスロ やじきた道中記参る！ — NEXT
3. Lすーぱぁびん娘
4. スマスロ とんでもスキルで異世界放浪メシ
5. スマスロ とある魔術の禁書目録2
6. スマスロ ストリートファイター6
7. スロット ワールドダイスター
8. LBトリプルクラウンX-300

### 境界再監査
- 2026年7月は月間整理で全7機が7/6導入とされ、既処理7機と一致。7月後半の追加本体を固定できずCLOSED維持。
- 2026-08-03群は複数新台カレンダーを照合し、現時点で上記8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。

## sources summary
retrievedAt: 2026-09-15
No.1809:
- SANYO公式プレスリリース一覧: https://www.sanyobussan.co.jp/information/pressrelease.html
- SANYO公式: https://www.sanyobussan.co.jp/index.html
- 必勝本: https://hisshobon.com/news/102087/
- 6確: https://www.kaku6.jp/slot/jashinchan/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/260992/
- なな徹: https://nana-press.com/kaiseki/machine/1181/38246/
- スロベース: https://slobase.jp/machines/jashin-chan-dropkick
- スロベース reset: https://slobase.jp/articles/jashin-chan-dropkick-reset
- こぜログ: https://kozelog.net/machine/sun3/jashin-chan/

## 次回再開地点
- 最新mainを再同期しNo.1809と本handoffを確認。
- **No.1810候補 `スマスロ やじきた道中記参る！` — 2026-08-03** から継続。
- その後 `Lすーぱぁびん娘 → スマスロ とんでもスキルで異世界放浪メシ → スマスロ とある魔術の禁書目録2 → スマスロ ストリートファイター6 → スロット ワールドダイスター → LBトリプルクラウンX-300`。
- 8/8完了後に2026-08-03群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。

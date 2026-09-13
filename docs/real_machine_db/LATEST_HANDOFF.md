更新日: 2026-09-14

## 現在地点
- recordCount: **1633**
- latestRecordAdded: **パチスロ ガメラ2 — No.1633**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-04_gamera2.md`
- chronologicalFrontier: **2024-03-04**
- frontierLatestMachine: **パチスロ ガメラ2 — No.1633**
- schema: **resetBehavior v0.7**
- status: **2024-03-04_GROUP_CLOSED_5_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1632 `チバリヨ2` を確認して開始。
- INDEXは旧版表示のためREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- LATEST_HANDOFF指定どおりNo.1633 `パチスロ ガメラ2` から継続し、性能コア + resetBehavior v0.7で追加。
- 2024-03-04群はHAZUSE月間一覧、ALL7導入予定一覧、および各機種の個別導入日資料を再監査し、5機でCLOSED判定。
- 次の時系列境界は2024-03-09のPB機 `パチスロ ブラックミクちゃん`。Amusement Japan/遊技日本/P-WORLD系記事で同日から2店舗テスト導入開始を確認したため、次回No.1634候補として保持。

## No.1633 — パチスロ ガメラ2
- path: `docs/real_machine_db/machines/2024-03-04_gamera2.md`
- manufacturer: **タイヨーエレック（Sammyブランド）**
- formalModel: **Sガメラ2 XR**
- inspectionCode: **330357**
- releaseDate: **2024-03-04**
- generation: **6.5号機 / メダル機**
- systemType: **A600-AT / 擬似ボーナスAT / 技術介入**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 市場想定機械割: **99.0 / 99.8 / 101.4 / 102.9 / 105.1 / 107.2%**
- 完全攻略時: **102.0 / 102.9 / 104.7 / 106.4 / 108.9 / 111.3%**
- BIG: **1/376.9 / 1/370.3 / 1/356.1 / 1/341.1 / 1/326.3 / 1/311.0**
- REG: **1/527.1 / 1/517.4 / 1/505.5 / 1/492.6 / 1/479.8 / 1/464.2**
- 合算: **1/219.8 / 1/215.8 / 1/208.9 / 1/201.6 / 1/194.2 / 1/186.2**
- base: **約33G/50枚**
- BIG平均約560枚 / REG平均約90枚
- 天井: **非搭載**

### No.1633 resetBehavior v0.7
- setting change: **表モード・裏モード再抽選、演出モードはデフォルトへRESET、海ステージ開始。有利区間RESET。**
- carry over: **据え置き時は有利区間CARRY_OVER。**
- power OFF→ON: **表モード・裏モードCARRY_OVER、演出モードはデフォルトへRESET、海ステージ開始（ボーナス中/連続演出中を除く）。**
- game/ceiling: **天井非搭載のためRESET/CARRY_OVERおよび短縮天井はN/A。**
- mode: **設定変更時再抽選 / 純電断時引継ぎ。設定変更専用の具体的表/裏モード振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- internal state: ちょんぼりすたでは設定変更時RESET / 電源OFF→ON時引継ぎ。必勝本の表/裏モード契約と整合。
- morning benefit: **モード再抽選以外の固定数値恩恵はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。天井短縮はN/A。**
- reset detection: **有利区間ランプでは判別不可。設定変更/電断とも演出モードがデフォルト、海ステージ開始のため表示単独では判別不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。**
- pure power-cycle advantageous section direct contract: **UNVERIFIED_AFTER_RESEARCH**（推定転記しない）
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_PUBLIC_RESET_MODE_SPLIT**

## conflicts — No.1633
- 設定3市場想定機械割: 多数資料 **101.4%**、スロベース検索結果 **101.2%**。101.4%をcanonical、101.2%をminority CONFLICT。
- 設定4 REG: K-Navi/ぽこすろっと等 **1/492.6**、パチマニア **1/492.9**。1/492.6をcanonical、1/492.9をminority CONFLICT。

## 2024-03-04群 — CLOSED 5/5 canonical
1. スマスロキングパルサー — No.1629 DONE
2. L南国育ち — No.1630 DONE
3. キングクリエーター30 — No.1631 DONE
4. チバリヨ2 — No.1632 DONE
5. パチスロ ガメラ2 — No.1633 DONE

境界監査メモ:
- HAZUSEの2024年3月導入一覧は3/4群として上記5機を掲載。
- ALL7は3/4にキングパルサー、チバリヨ2、ガメラ2等を確認。既存レコードの南国育ち/キングクリエーター30は個別資料で同日導入を確認済み。
- `パチスロ ブラックミクちゃん` はタツミコーポレーションPB機。Amusement Japan・遊技日本/P-WORLD記事で2024-03-09に2店舗（西明石13台、泉ヶ丘16台）テスト導入開始と確認。3/4群へ混入させず次境界として扱う。
- ブラックミクちゃんは4月から全店導入決定との後続記事があるため、releaseDateは「2024-03-09 テスト導入開始」を本線候補とし、4月全店展開を段階導入属性として保持する。

## 次回再開地点
1. 最新mainを再同期し、No.1633と本handoffの反映を再取得確認。
2. **No.1634候補 `パチスロ ブラックミクちゃん` — 2024-03-09テスト導入開始** を性能コア + resetBehavior v0.7で処理する。
3. PB機のため、型式 `SブラックミクちゃんDA`、製造元DAXEL、3/9二店舗テスト導入→4月全店導入という段階導入を混同せず記録する。
4. No.1634処理後、2024-03-18群（スマート沖スロ ドラゴンハナハナ～閃光～ / 忍魂参 ～奥義皆伝ノ章～ / SLOT忍者じゃじゃ丸くん / ドラゴンハナハナ～閃光～）へ進む前にPB・別型式・地域先行・延期/段階導入を境界監査する。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### パチスロ ガメラ2
- HAZUSE: https://hazuse.com/hd/330357-2/
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/SX0068/
- P-WORLD: https://www.p-world.co.jp/machine/database/9972
- K-Navi: https://p-kn.com/slot/4083/
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2594/2
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/82741/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/695/19835/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/203412/
- パチマニア: https://ps-mania.jp/slot/s-gamera2/
- ぽこすろっと: https://www.nankaikoya.jp/gamera2-settei/
- スロベース: https://slobase.jp/machines/gamera2

### 2024-03-04群 / 次境界監査
- HAZUSE 2024年3月導入一覧: https://hazuse.com/new-machine/202403-2/
- ALL7 2024年3月導入予定一覧: https://www.all7.jp/plans/index/2024/03/10
- Amusement Japan ブラックミクちゃん3/9テスト導入: https://amusement-japan.co.jp/article/detail/10004209/
- 遊技日本/P-WORLD ブラックミクちゃん: https://news.p-world.co.jp/articles/27215/nippon
- グリーンべると/P-WORLD 4月全店導入決定: https://news.p-world.co.jp/articles/27211/greenbelt

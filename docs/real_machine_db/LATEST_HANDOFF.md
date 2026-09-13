更新日: 2026-09-14

## 現在地点
- recordCount: **1645**
- latestRecordAdded: **パチスロ ダンジョンに出会いを求めるのは間違っているだろうか2 — No.1645**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-04-22_danmachi2.md`
- chronologicalFrontier: **2024-04-22**
- frontierLatestMachine: **パチスロ ダンジョンに出会いを求めるのは間違っているだろうか2 — No.1645**
- schema: **resetBehavior v0.7**
- status: **2024-04-22_BOUNDARY_CLOSED_2_OF_2_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1643 `パチスロ金のかぼちゃ` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 2024-04-22群を再監査し、既知候補 `押忍！番長4` に加えて `パチスロ ダンジョンに出会いを求めるのは間違っているだろうか2` を同日canonicalとして確認。
- No.1644 `押忍！番長4`、No.1645 `ダンまち2` を性能コア + resetBehavior v0.7で新規登録。
- 4/22同日候補を `2024年4月22日 / 2024-04-22 / パチスロ新台 / 導入 / 型式 / PB / 地域先行 / 段階導入` 等へ検索語を変え、業界記事・新台カレンダー・機種DB・主要解析を横断。今回固定できたcanonicalは2機のため **2/2 CLOSED**。

## No.1644 — 押忍！番長4
- path: `docs/real_machine_db/machines/2024-04-22_osu-bancho4.md`
- manufacturer: **大都技研**
- formalModel: **L押忍！番長4 A3**
- inspectionCode: **3S1296**
- releaseDate: **2024-04-22**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス+ゲーム数上乗せAT**
- 機械割 setting1-6: **97.8 / 98.9 / 101.5 / 106.0 / 110.0 / 113.1%**
- 初当り setting1-6: **1/259.5 / 1/256.3 / 1/247.6 / 1/236.0 / 1/225.3 / 1/221.1**
- base: **約33G/50枚**
- 純増: **通常AT/擬似ボーナス 約2.7枚/G / 上位AT 約4.5枚/G**
- AT「頂RISE」: **初期50G+α**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1644 resetBehavior v0.7
- setting change: **有利区間・ボーナス間699G+α天井・内部状態・モードRESET。押忍モード移行確定。**
- carry over: **据え置きは有利区間・天井・内部状態・モードCARRY_OVER。**
- power OFF→ON: **有利区間・天井・内部モードCARRY_OVERを機種別攻略資料で確認。内部状態/表示復帰は高信頼複数裏取り不足のため一部UNVERIFIED。**
- ceiling/mode: **ボーナス間699G+α天井自体の短縮なし。押忍モードの特訓天井149G、特訓後対決勝利期待度50%オーバー。**
- ATスルー: **通常最大9スルー→設定変更後最大6スルーへ短縮。7回目のボーナスでAT当選。**
- advantageous section: **設定変更RESET / 据え置きCARRY_OVER。通常時有利区間リセット後の頂RISE UP恩恵は設定変更時を除く。**
- reset detection: **朝一149Gを超えて特訓非突入なら据え置き濃厚材料。設定変更/据え置きとも赤オーラとなる解析があり見た目単独判別不可。ガックン/ランプ確定判別は再探索後UNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1644
- 設定変更時押忍モード移行率: **100%（移行確定）**
- 押忍モード特訓天井: **149G**
- 押忍モード中の特訓後対決勝利期待度: **50%オーバー**
- 設定変更時ATスルー天井: **最大6スルー後、7回目ボーナスでAT**
- 通常ATスルー天井: **最大9スルー後、10回目ボーナスでAT**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## No.1645 — パチスロ ダンジョンに出会いを求めるのは間違っているだろうか2
- path: `docs/real_machine_db/machines/2024-04-22_danmachi2.md`
- manufacturer: **北電子（型式検定上の製造元表記: ゼクロスクリエイティブ）**
- formalModel: **Sダンまち2XZ**
- inspectionCode: **3S1481**
- releaseDate: **2024-04-22**
- generation: **6.5号機 / メダル機**
- systemType: **A+ART / リアルボーナス+ART**
- 市場予想機械割 setting1-6: **98.3 / 99.6 / 100.9 / 104.8 / 106.8 / 108.9%**
- 完全攻略機械割 setting1-6: **100.6 / 102.0 / 103.3 / 107.4 / 109.4 / 111.5%**
- ボーナス合算: **1/183.6 → 1/152.4**
- ART初当り: **1/493.7 → 1/354.7**
- base: **約36G/50枚**
- ART純増: **約0.4枚/G**
- ボーナス: **青7約203枚 / 赤7約150枚 / 異色約120枚 / ファミリアチャンス約56枚**
- coreConfidence: **OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1645 resetBehavior v0.7
- setting change: **救済機能ゲーム数RESET / 内部状態RESET / 液晶G数「---」/ 貧民街ステージ開始。**
- carry over / power OFF→ON: **救済機能ゲーム数・内部状態CARRY_OVER。液晶G数「---」/ 貧民街ステージ開始。**
- game/ceiling: **ボーナス・CZ間555G+αでCZ。設定変更専用短縮なし。ファミリアボーナス時は50%で天井進行RESET、ファミリアチャンスではRESETされない。**
- mode: **独立した朝一専用モードは再探索後も固定できずNO_DISCRETE_MORNING_MODE_CONFIRMED_AFTER_RESEARCH。**
- advantageous section: **機種固有の設定変更/据え置き/純電断別直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。**
- morning benefit: **専用短縮天井・朝一高モード固定・当選率優遇の公開値を確認できずNONE_CONFIRMED_AFTER_RESEARCH。**
- reset detection: **設定変更/純電断とも液晶「---」・貧民街ステージで同じ。ガックン/有利区間ランプ確定判別は再探索後UNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1645
- 設定変更時救済天井: **555G+αを0Gから再スタート / 短縮なし**
- 電源OFF→ON時救済ゲーム数: **CARRY_OVER**
- 設定変更時内部状態: **RESET**
- 電源OFF→ON時内部状態: **CARRY_OVER**
- 設定変更/電断時液晶G数: **実戦上「---」**
- 設定変更/電断時開始ステージ: **貧民街**
- 朝一専用モード振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
### No.1644
- 性能コア主要値は業界記事・メーカー系発表・複数解析で一致し、今回明確な性能CONFLICTなし。
- 純電断の内部状態/表示復帰およびガックンは一般論から補完せずUNVERIFIEDを維持。

### No.1645
- 性能コア主要値は必勝本・業界記事・HAZUSE・複数解析で一致。
- 一部後年DBにAT機/高純増とする誤記があるが、公式/業界/主要解析がA+ART・純増約0.4枚/Gで一致するためcanonicalには採用しない。
- 有利区間、ガックン、設定変更時内部状態の具体的振り分けは直接資料不足のため推測補完せずUNVERIFIED。

## 2024-04-22境界 — CLOSED 2/2 known canonical candidates
1. 押忍！番長4 — No.1644 DONE
2. パチスロ ダンジョンに出会いを求めるのは間違っているだろうか2 — No.1645 DONE

境界監査メモ:
- 新台カレンダー、業界発表、メーカー/型式情報、主要解析を横断し2機の2024-04-22導入を確認。
- `2024年4月22日 パチスロ 新台 導入`、`2024/04/22 スロット 新台`、`PB`、`地域先行`、`段階導入` 等へ検索語を変えて再監査し、今回これ以外の同日canonicalパチスロを固定できなかったため2/2 CLOSED。

## 次回再開地点
1. 最新mainを再同期し、No.1644 / No.1645と本handoffを再取得確認。
2. **2024-05-06〜05-07境界を監査**。資料間に日付差があり、K-Naviは `沖シーサー-30` を5/6、`スマスロ炎炎ノ消防隊`・`Lウルトラマンティガ` を5/7、`スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION` を5/13、`ニューパルサーSP4 with 太鼓の達人` を5月上旬とする一方、マルっとWAVE/P-Summa等は5機を5/7群として扱う。
3. まず `沖シーサー-30` の実導入日をメーカー/業界/設置DBで再照合し、5/6独立群か5/7群かを確定。続いて残る4機のcanonical日付を確定する。
4. 確定した最初の未処理機を **No.1646** として性能コア + resetBehavior v0.7で登録。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1644 押忍！番長4
- 大都技研 公式製品サイト: https://www.daitogiken.com/contents/product/slot/bancho4/
- グリーンべると 新機種発表: https://web-greenbelt.jp/post-81136/
- 遊技日本 新機種発表: https://yugi-nippon.com/pachinko-new-machine/post-63734/
- 検定通過記事: https://news.p-world.co.jp/articles/26975/greenbelt
- HAZUSE機種DB: https://hazuse.com/hd/3s1296/
- なな徹 解析TOP: https://nana-press.com/kaiseki/machine/736/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/736/20458/
- なな徹 天井: https://nana-press.com/kaiseki/machine/736/20456/
- 一撃 天井/朝一/有利区間: https://1geki.jp/slot/l_osu_bancho4/3/
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/osu-banchou4-tenjou/

### No.1645 ダンまち2
- 北電子 Sダンまち2XZ検定情報: https://www.kitadenshi.co.jp/slot-kentei/danmachi2/
- Amusement Japan 新機種発表: https://www.amusement-japan.co.jp/article/detail/10004241/
- 遊技日本 検定通過: https://news.p-world.co.jp/articles/26559/nippon
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/3S1481/
- 必勝本 基本スペック/天井/設定変更: https://p.hisshobon.jp/vpage/2617/2
- 必勝本 システム解説: https://p.hisshobon.jp/vpage/2617/4
- パチビー機種/天井: https://www.pachibee.jp/machines/kouryaku/224030002
- マルっとWAVE 基本スペック: https://marutto-w.com/industry_news/20240423-2
- 一撃 設定差: https://1geki.jp/slot/s_danmachi2/0/

### boundary / next boundary
- イチカツ 2024新台一覧: https://ichikatsu.com/newslot2024/
- スロパチニュース 4月22日導入開始予定機種: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/4%E6%9C%8822%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- K-Navi 2024年5月新台カレンダー: https://p-kn.com/calendar/202405/
- マルっとWAVE 5/7以降新台予定: https://marutto-w.com/industry_news/20240508
- P-Summa 2024年5月パチスロ新台: https://psumma.jp/pachislo/61076/

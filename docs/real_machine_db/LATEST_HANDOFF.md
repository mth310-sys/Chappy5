# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **646**
- latestMachineAdded: **ニューアイムジャグラーEX**（北電子）
- latestRecord: `docs/real_machine_db/machines/2012-03-19_new-im-juggler-ex.md`
- chronologicalFrontier: **2012-03-19**
- frontierLatestExactDateMachine: **ニューアイムジャグラーEX**
- schema: **resetBehavior v0.7**
- status: **2012-03-19_GROUP_CLOSED__NEXT_2012-03-26_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、既存レコード、最新コミットを確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 645 / frontier 2012-03-12 / パチスロ銀河鉄道999。
- 2012-03-12同日群をK-Navi/HAZUSE/周辺日付検索で再監査し、銀河鉄道999以外の具体的未登録パチスロを確定できなかったため03/12群を閉鎖。
- 次の具体日としてHAZUSEが2012-03-19導入開始とする「ニューアイムジャグラーEX」を検出。GitHubコード検索に加え想定pathを直接fetchして未登録を確認後、646件目として追加した。
- 03/19について追加の具体的未登録機を複数検索で確定できなかったため群を閉鎖。次は2012-03-26群を監査する。

## 今回の本線追加 — ニューアイムジャグラーEX

### 導入日・型式

- 時系列キー: **2012-03-19**。
- HAZUSE: 2012-03-19導入開始。
- K-Navi: 2012-04-02ホール導入開始。
- アタリ7: 2012-04-02導入日。
- 同一機種・同一初期型式について具体日が競合するため `CONFLICT_EXACT_DATE_2012-03-19_VS_2012-04-02` として保持し、漏れ防止のため最古具体日03/19を時系列キーに採用。
- formalModelName: **ニューアイムジャグラーEX-C**。
- approvalNumber: **1S1213**。

### 性能コア

- systemType: **5号機ノーマル / ボーナス主体 / 完全告知**。
- 北電子公式出玉率: **95.85 / 96.70 / 98.71 / 100.80 / 102.80 / 105.16%**。
- BIG: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**。
- REG: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**。
- 合算: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**。
- 50枚ベース（チェリー狙い解析値）: **35.00 / 35.00 / 35.01 / 35.01 / 35.02 / 36.38G**。
- BIG約**325枚**、REG約**104枚**。
- 天井機能非搭載。
- チェリー狙い時の解析機械割 **96.91 / 97.80 / 99.91 / 102.04 / 104.16 / 106.55%** はメーカー公表値と定義が異なるため、CONFLICTではなく別定義として保存。

### resetBehavior v0.7

- ゲーム数天井、規定G数モード、ART/AT/CZ、有利区間は非該当。
- 設定変更専用の短縮天井、朝一高確、朝一専用モード、特定G以内当選率は `NONE_CONFIRMED_AFTER_RESEARCH` / `NOT_APPLICABLE`。
- 本機名を明示する解析資料で、**設定変更後に店側が回していなければ朝一1G目にリールのガックンが発生し得る**ことを確認。`resetDetection=CONDITIONAL_GAKKUN_CONFIRMED`。
- 別資料ではガックンは目視困難なほど僅かなブレとの説明もあり、視認性には個体差/資料差があるため確定判別にはしない。
- 単純電源OFF→ONだけの場合に同じガックンが出るか、設定変更とどう分離できるかは本機固有の直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時は天井/モード持越し自体が非該当。その他の内部一時状態はUNVERIFIED_AFTER_RESEARCH。

## 時系列監査 / 次回再開地点

1. **recordCount 646 / chronologicalFrontier 2012-03-19**から開始。
2. 次の具体日 **2012-03-26** 群を監査する。
3. 最優先候補はロデオ **「パチスロ『モンスターハンター』」**。K-Naviで2012-03-26ホール導入開始を確認済み。GitHubコード検索だけで未登録と断定せず、handoff・コミット履歴・想定path直接fetchを併用する。
4. 03/26同日群をK-Navi/P-WORLD/HAZUSE/パチビー/当時業界記事で閉鎖できるまで次の日付へ飛ばさない。
5. PARTIAL/UNVERIFIEDは機種名表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- 北電子公式 ニューアイムジャグラーEX: `https://www.kitadenshi.co.jp/slot/newimjugglerex/`
- 北電子公式 検定情報: `https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex/`
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0042/`
- K-Navi: `https://p-kn.com/slot/1592/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6641`
- 激アツ解析: `https://gekiatsu7.com/slot-analyze/1995/`
- JUGJUG: `https://jugjug.net/newimjugglerex`
- アタリ7: `https://www.atari7.com/slot/new-imjuggler-ex-2012.php`
- 次候補 モンスターハンター K-Navi: `https://p-kn.com/slot/1596/`

## GitHub commits

- ニューアイムジャグラーEX machine record: `6b6b3a27e32ecbe475e0936d6de29e0a5b4de7a7`

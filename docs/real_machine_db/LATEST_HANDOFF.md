# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md`、直近commitを確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 188件目 `しぇんしぇーのスロットマシーン30` までを継承。
- 9月残候補をmain既存群と再照合し、`ミスターマリック`、`学習パチスロ国語`、`春夏秋冬`、`時空大作戦`、`戦慄-IF IT HAPPEN`、`トリプルクラウンS2-30`、`クレイジージョーカー` 等は既存レコードを確認したため重複追加しない。
- **189件目として `マッドジー`（SNKプレイモア）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-10-09_mad-g.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `be58829a0136200d324033469b23825169180dd0`

## 189. マッドジー

- manufacturer: SNKプレイモア
- releaseDate: `2007-10-08（納品開始） / 2007-10-09（ホール導入予定）`
- generation: 5号機初期
- systemType: A+ART / ボーナス+ART / 次回ボーナス級ARTあり
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- グリーンべると2007-09-21記事で納品は2007-10-08から。
- K-Navi 2007-09-15内覧会記事でホール導入は2007-10-09予定。
- 5号機クロニクルは2007/10導入として整理。
- 本DBでは物流開始と一般ホール導入予定を定義分離して保持する。

### 性能コア

- 設定別機械割（設定1→6）: `98.9 / 101.0 / 102.9 / 104.8 / 106.8 / 108.7%`。現時点では5号機クロニクル単一整理DB値。
- ボーナス合成（設定1→6）: `1/284 / 1/277 / 1/270 / 1/264 / 1/258 / 1/252`。設定1/6端点は当時グリーンべると記事と一致。
- コックBIG/アッシBIG/ラビーBIG/マッドボーナスの設定別内訳はレコードに収録。
- 平均獲得: コックBIG約350枚、アッシBIG約350枚、ラビーBIG約250枚、マッドボーナス約81枚。
- ART `スーパークレイジータイム`: コックBIG後、最大5000G（実質次回ボーナス級）。
- ART `クレイジータイム`: マッドボーナス後、最大50G。
- ART純増: 約 `+0.3枚/G`。
- 50枚ベースは `マッドジー / MAD G / SNKプレイモア / 50枚 / 1000円 / ベース / コイン持ち / 通常時` 等で当時業界・解析・旧DB・回顧資料を再探索したが比較可能値を確定できず `UNVERIFIED`。

### v0.7 resetBehavior

- settingChangeBehavior: 通常時専用モード/短縮天井/朝一恩恵 `NONE_CONFIRMED`、ART中設定変更時の残G/内部状態処理 `UNVERIFIED`
- carryOverBehavior: 通常時ゲーム数天井 `NONE_CONFIRMED`、ART中据え置き時残G/内部状態処理 `UNVERIFIED`
- powerCycleBehavior: 電源OFF→ONのみの通常時固有変化 `NONE_CONFIRMED`、ART中電断復帰 `UNVERIFIED`
- gameCounterReset: 通常時ゲーム数天井を確認できず `NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: 朝一/設定変更専用モード・公開振り分け `NONE_CONFIRMED`
- stateAfterReset: 通常時公開再抽選 `NONE_CONFIRMED`、ART中変更/据え置き/電断時処理 `UNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: 本機固有ガックン/初期出目/表示等 `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- 表記揺れ `マッドジー / MAD G / SNKプレイモア / スーパークレイジータイム / クレイジータイム` と、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/天井/モード/ART残り/変更判別を組み替え、当時業界記事・K-Navi・旧解析DB・5号機回顧資料を横断済み。

## 主要出典

### マッドジー
- グリーンべると: https://web-greenbelt.jp/00006441/
- K-Navi 内覧会: https://p-kn.com/topics/news/349/
- K-Navi クレイジータイム: https://p-kn.com/slot/654/3946/
- 5号機クロニクル SNKプレイモア一覧: https://5goki.com/snkplaymore
- スロリスクタイム ま行一覧: https://pachisuro100.com/magyo/

取得日: 2026-09-01

## 9月→10月境界監査メモ

- `ミスターマリック` は `docs/real_machine_db/machines/2007-08-20_mr-maric.md` が既存。
- `学習パチスロ国語`、`春夏秋冬`、`時空大作戦`、`戦慄-IF IT HAPPEN` も既存確認済み。
- `トリプルクラウンS2-30` と `クレイジージョーカー` はグリーンべると当時記事で2007-09-17納品開始を確認し、mainにも既存レコードあり。10月一覧資料に現れる場合でも重複しない。
- `南国姉妹-30` は既存レコードかつ導入月CONFLICTを保持しているため重複しない。
- 10月候補には `CANスロ`、`ナチユリ-30`、`パチスロ湘南爆走族`、`元祖ハネスロ`、`マジックモンスター2` 等がある。`元祖ハネスロ` は当時グリーンべるとで2007-10-21納品開始を確認済み。`マジックモンスター2` は前リレーで2007-10-22予定を確認済み。
- `CANスロ` はmain独立レコード未確認だが、現時点で具体導入日の高信頼根拠が不足しているため、**次回最優先で実導入日を監査し、2007-10-09より古い/同等なら遡及追加、後なら時系列位置を確定する。**

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` は補完済み。
- 2006年7月 `花盛` はv0.7 resetBehavior補完済み（commit `fe6a61d86ab1dbac3e703381115b18c5fbeae017`）。
- **次の最古resetBehavior欠損候補は2006年7月 `大江戸漫遊記`。** 現レコード `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` の既存性能コアを不用意に再採掘せず、resetBehaviorのみ別管理で補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準189件地点から継続。** 2007年10月候補の実導入日を監査し、最古の独立未登録5号機から追加する。
2. 最優先: `CANスロ`（オルカ）のメーカー/型式/具体納品・ホール導入日を、表記揺れ・旧業界記事・古いDB・アーカイブまで横断して確定する。mainには独立レコード未確認。
3. 並行して `ナチユリ-30`、`パチスロ湘南爆走族` の具体導入日とmain既存有無を監査し、`マッドジー` 2007-10-08/09との前後関係を確定する。
4. 既確認後続候補は `元祖ハネスロ` 2007-10-21納品開始、`マジックモンスター2` 2007-10-22予定。古い未処理がなければ順次進む。
5. resetBehavior遡及QAは **2006年7月 `大江戸漫遊記`** から再開。
6. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替えて資料系統を横断する。競合値は平均せず `CONFLICT`。

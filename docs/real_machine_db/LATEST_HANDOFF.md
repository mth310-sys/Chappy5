# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **570**
- latestMachineAdded: **ハネスロ リラックマ**（オーイズミ / 2011-05-08納品開始、2011-05-09ホール導入）
- latestRecord: `docs/real_machine_db/machines/2011-05-08_haneslo-rilakkuma.md`
- chronologicalFrontier: **2011-05-08**
- frontierLatestExactDateMachine: **ハネスロ リラックマ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、568前線レコード「メーメーパラダイス」を再取得して開始。
- `INDEX.md` は旧19件地点のため、README規約どおり最新 `LATEST_HANDOFF.md` と実machineレコードを進捗正本として使用。
- 2011-04-24同日群と4/25〜5/5境界を当時業界記事・解析DB・旧資料で再監査。最初の具体的未登録日として2011-05-06「ドラゴンギャル ～ルーと伝説の黄金龍～」を確認し569件目へ追加。
- 続けて5/7〜5/8境界を監査。震災で納品が4/17から5/8へ延期された「ハネスロ リラックマ」を未登録確認し570件目へ追加。K-Navi/パチビーのホール導入5/9とは日付定義を分離保存。

## 今回追加 — 569 ドラゴンギャル ～ルーと伝説の黄金龍～

- メーカー: **SNKプレイモア**
- 型式: **ドラゴンギャル2C** / 検定番号 **0S1373**
- 導入開始: **2011-05-06（HAZUSE）**
- 5号機 / **ART特化・ボーナス非搭載**
- ART初当たり: **1/215.2 / 1/206.2 / 1/197.6 / 1/186.4 / 1/176.2 / 1/127.9**
- パチマガ機械割: **96.8 / 98.6 / 100.2 / 105.3 / 110.0 / 113.1%**
- 純増: **約+2.0枚/G**
- 闘BONUS: **30G** / 天BONUS: **50G+α**
- 第1天井: **ART間1000G**以降チャンス役1/2でART抽選
- 第2天井: **ART間1100G**でART確定。闘なら95%ループ、天なら5セット以上。
- 50枚ベースは本機専用パチマガページも「調査中」で、検索語・資料系統変更後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- HAZUSEの設定6機械割110% / ART初当たり1/176.2は、パチマガ113.1% / 1/127.9および業界記事端値約1/127と競合。平均せず `CONFLICT`。

### resetBehavior v0.7 — 569

- 設定変更時: **天井ゲーム数CLEAR / 通常・高確・超高確を再抽選**とする本機名指定の現存二次資料あり。
- 設定変更時状態振り分け（通常/高確/超高確）:
  - 設定1: 70.00 / 25.00 / 5.00%
  - 設定2: 62.50 / 30.00 / 7.50%
  - 設定3: 55.00 / 35.00 / 10.00%
  - 設定4: 47.50 / 40.00 / 12.50%
  - 設定5: 40.00 / 45.00 / 15.00%
  - 設定6: 32.50 / 50.00 / 17.50%
- 高確以上スタート率: **30.0 / 37.5 / 45.0 / 52.5 / 60.0 / 67.5%**。
- 朝一恩恵: 高確/超高確スタート可能性。朝一不利: 前日ART間天井進捗消失。
- 液晶背景/同行者は設定変更でも変化しないとの同資料あり。
- 据え置き全状態、単純電源OFF→ON、ガックン/初期出目は十分再探索後も直接確定できず PARTIAL/UNVERIFIED。
- 数値reset情報は現存コミュニティ転載の単一二次資料なので `ANALYSIS_SINGLE_LOW` として過信せず保存。

## 今回追加 — 570 ハネスロ リラックマ

- メーカー: **オーイズミ** / 型式 **ハネスロRK**
- 納品開始: **2011-05-08**（震災で4/17から延期）
- ホール導入: **2011-05-09**（K-Navi / パチビー）
- 5号機 / **ボーナス主体+天井無限RT / 2リール+倍倍リール**
- 機械割: **95.6 / 97.8 / 100.0 / 104.2 / 108.3 / 113.0%**
- ボーナス合算: **1/96 / 1/93 / 1/89 / 1/82 / 1/77 / 1/72**
- 1000円ベース: **32.30G〜35.87G**
- 1倍/2倍/3倍/4倍BONUS: **60 / 120 / 180 / 240枚**
- 天井: **通常222G** → 無限RT「リラックマタイム」
- RT純増: **約+0.4枚/G**、次回ボーナスまで継続。4倍BONUS後もRT。
- 液晶に天井までの残りGを表示する天井カウンタあり。

### resetBehavior v0.7 — 570

- 222G天井の構造自体は業界記事・P-WORLD等で高信頼確認。
- ただし設定変更 / 据え置き / 単純電源OFF→ON別に、222G内部天井・液晶天井カウンタ・閉店時RT状態がCLEAR/RETAINのどちらかを本機固有の直接本文で確定できず、検索語・型式名・メーカー・シリーズ名と朝一/宵越し/ガックン等を変えた後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用短縮天井、高確スタート、朝一専用モード等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- 222Gと極端に浅い天井のためreset判定は朝一客AI上重要。一般論でCLEAR/RETAINを補完せず後続QA対象に残す。

## 主要出典 — 569（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00001976/`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S1373/`
- HAZUSE DATA: `https://data.hazuse.com/?genre=202&machine_code=0S1373`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6344`
- パチマガ ART/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/34/h.php`
- パチマガ ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/34/c.php`
- mixi現存二次資料: `https://mixi.jp/view_bbs.pl?comm_id=5988268&id=69535193`

## 主要出典 — 570（取得日 2026-09-04）

- グリーンべると納品延期: `https://web-greenbelt.jp/00001917/`
- P-WORLD業界ニュース転載: `https://news.p-world.co.jp/articles/4538/greenbelt`
- グリーンべると/P-WORLD発表記事: `https://news.p-world.co.jp/articles/4417/greenbelt`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6288`
- K-Navi: `https://p-kn.com/slot/1389/`
- パチビー: `https://www.pachibee.jp/machines/index/211020007`
- パチマガベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/25/c.php`
- 娯楽産業 ハネスロRK発表: `https://www.goraku-sangyo.com/%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%ADrk%E3%80%8D%E3%83%97%E3%83%AC%E3%82%B9/`

## 今回のGitHub更新

- 569: `docs/real_machine_db/machines/2011-05-06_dragon-gal-ruu-to-densetsu-no-ougondragon.md`
  - machine commit: `d830068190c36a69d1a90802a1a6e44073f1735b`
- 570: `docs/real_machine_db/machines/2011-05-08_haneslo-rilakkuma.md`
  - machine commit: `b8704f844a5619cacd98bc64f38eab2d5de8097d`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 570 / chronologicalFrontier 2011-05-08**。最新main README / mission / INDEX / LATEST_HANDOFF / 569・570レコードを再取得。
2. 2011-05-09は「ハネスロ リラックマ」のホール導入日であり同一機種なので重複登録しない。同日群に別の未登録5号機がないか最終監査。
3. 次に **5/10〜5/21境界**を監査。具体的導入/納品日を確認できる最古未登録機を追加する。
4. 現時点の後続具体日アンカーは **2011-05-22「ドラゴノーツ －ザ・レゾナンス－」納品開始予定**（グリーンべると）。ただし5/10〜21の未処理機を飛ばさない。
5. さらに後続候補として **雀龍桜花 5/29納品開始予定**、**バリスタゴルフ 5/30ホール導入予定**を確認済み。順番を固定せず、境界監査後の最古具体日を採用。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。

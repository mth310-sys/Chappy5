更新日: 2026-09-09

## 現在地点
- recordCount: **1050**
- latestRecordAdded: **ヱヴァンゲリヲン・勝利への願い**（Bisty）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-20_evangelion-shouri-e-no-negai.md`
- chronologicalFrontier: **2017-02-20**
- frontierLatestMachine: **ヱヴァンゲリヲン・勝利への願い — No.1050**
- schema: **resetBehavior v0.7**
- status: **2017-02-20_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1049実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりINDEXより新しい `LATEST_HANDOFF.md` を直近進捗の正本として採用。
- main正本は1049件 / 2017-02-20群OPEN、次カーソル `ヱヴァンゲリヲン・勝利への願い`。
- GitHub既存検索で未登録を確認後、性能コア＋resetBehavior v0.7を収集してNo.1050として追加。
- 公式SANKYOオンライン博物館のビスティ機種コレクションで販売名・型式名・設定別BIG/IMPACT CHANCE/合算/ART確率・基本ゲーム構造を固定。導入日・検定番号はHAZUSE/K-Navi/一撃/複数解析で照合。
- resetBehaviorは一撃の2017-03-14更新直接比較表を主根拠に、HAZUSE・ちょんぼりすたで数値照合。設定変更と純電断を分離して保存。

## No.1050 — ヱヴァンゲリヲン・勝利への願い
- manufacturer: **Bisty**
- releaseDate: **2017-02-20**
- formalModelName: **ヱヴァンゲリヲン・勝利への願いS**
- certificationNumber: **6S1325**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.6 / 99.5 / 101.6 / 104.7 / 108.6 / 112.5%**。
- BIG: **1/963.8 / 963.8 / 963.8 / 936.2 / 910.2 / 910.2**。
- IMPACT CHANCE: **1/162.2 / 160.6 / 157.5 / 154.6 / 151.7 / 149.6**。
- ボーナス合算: **1/138.9 / 137.7 / 135.4 / 132.7 / 130.0 / 128.5**。
- ART初当たり: **1/557.1 / 544.2 / 501.7 / 467.7 / 404.7 / 378.7**。
- 50枚ベース: **約33G/50枚**。
- ART「IMPACT RUSH」単体純増: **約1.5枚/G**。ボーナス込み実効表記は**約2.0枚/G**として定義分離。
- BIG **150枚** / IMPACT CHANCE **60枚**。ARTは40Gストックパート＋使徒殲滅バトル。

### resetBehavior v0.7
- 通常ゲーム数天井: **ボーナス間777GでART当選**。
- 設定変更: 777G天井ゲーム数RESET、モードRESELECT、内部状態RESELECT、レスQポイント内部値再セット。
- 純電源OFF→ON: **天井ゲーム数・モード・内部状態・レスQポイントをすべてCARRYOVER**。液晶ステージのみ当時資料が調査中のため `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き: 上記純電断直接比較と整合する形で主要朝一進捗をCARRYOVER扱い。
- 設定変更専用の固定短縮ゲーム数天井は `NONE_CONFIRMED_AFTER_RESEARCH`。ただしスルー回数天井は朝一モード再抽選により大幅優遇。
- 設定変更時モード: 通常A **3.1%** / 通常B **3.1%** / 天国準備 **6.3%**（全設定共通）。特殊/天国/超天国は設定別公開値あり。
- 特殊/天国/超天国:
  - 設定1: **25.0 / 56.3 / 6.3%**
  - 設定2: **25.0 / 56.3 / 6.3%**
  - 設定3: **21.9 / 56.3 / 9.4%**
  - 設定4: **15.6 / 62.5 / 9.4%**
  - 設定5: **12.5 / 62.5 / 12.5%**
  - 設定6: **12.5 / 62.5 / 12.5%**
- モード別スルー回数天井: 通常A/B・天国準備 **10回** / 特殊 **5回** / 天国 **3回** / 超天国 **1回**。
- 設定変更時は**特殊以上約90%**、天国以上60%以上。解析資料は「約90%が5回以内のボーナスでART当選」と整理。
- 設定変更時内部状態: **LOW 0% / MID 25% / HI 50% / SP 25%**。HI+SP=75%。
- レスQポイント: 設定変更時は液晶表示0ptだが内部 **2500pt 75% / 5000pt 25%**。10000ptでCZ「緊Q迎撃作戦」。
- 朝一表示0ptは設定変更・純電断双方で起こるため単独判別不可。レスQ獲得表示から内部ポイントを推測できるケースはあるが、確定変更判別ではない。
- 本機固有の確定的ガックン/初期出目/ランプ判別は再探索後 `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## dataQuality / conflicts
- SANKYO公式の設定別BIG/IMPACT CHANCE/合算/ART確率をcanonical performance probabilitiesとして採用。
- 機械割はHAZUSE・ちょんぼりすた・期待値見える化等で一致。
- 古いちょんぼりすた朝一表の天井/モードは「調査中」表記だが、後発の一撃2017-03-14更新では設定変更/電源OFF-ONの直接比較が確定表記。更新時点差と判断しmaterial CONFLICTにはしていない。
- material conflicts: **NONE_CONFIRMED**。
- power-cycle LCD stage: **UNVERIFIED_AFTER_RESEARCH**。

## 2017-02-06境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- No.1044〜1048で `パチスロ牙狼-守りし者- / JAWS ～it's a SHARK PANIC～ / GⅠ優駿倶楽部 / パチスロおそ松さん / ジャックポット トロピカルバージョン2` を登録済み。
- `パチスロマジンガーZ 新たな魔神の力` はK-Navi 2/6表記を保持するが、複数系統2/20資料を優先し2/20群でCONFLICT処理する。

## 2017-02-07〜02-19境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 2-9伝説の次のパチスロ導入群は2/20。K-Navi 2/13列には全国導入パチスロ本線なし。

## 2017-02-20境界監査
- status: **OPEN**。
- 登録済み:
  - パチスロ 宇宙戦艦ヤマト2199 — No.1049
  - ヱヴァンゲリヲン・勝利への願い — No.1050
- 同日未処理候補:
  - **パチスロマジンガーZ 新たな魔神の力**（EXCITE） — 全国導入2/20とK-Navi 2/6表記のCONFLICT要保持。
- 2-9伝説は2/20群を `ヱヴァンゲリヲン・勝利への願い / 宇宙戦艦ヤマト2199 / マジンガーZ 新たな魔神の力` と整理。マジンガー処理後に全メーカー最終監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1050を再取得。
2. **1050件 / chronologicalFrontier 2017-02-20 / 2/20群OPEN** を正本として継続。
3. 次の未処理機は **No.1051候補 `パチスロマジンガーZ 新たな魔神の力`（EXCITE）**。性能コア＋resetBehavior v0.7を収集。
4. releaseDateは複数資料の2017-02-20とK-Naviの2017-02-06を平均・消去せず `CONFLICT_RELEASE_DATE_2017_02_20_VS_2017_02_06_KNAVI_OR_REGIONAL_EARLY` として保持する。
5. マジンガー処理後、2/20群を全メーカー最終監査してCLOSED可否を判定。次に2/21〜26境界を監査し、既知の次大群2/27 `パチスロ モンキーターンIII` へ進む。
6. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1050 ヱヴァンゲリヲン・勝利への願い
- SANKYOオンライン博物館 / ビスティ機種コレクション: https://www.sankyo-fever.jp/collection/885/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1325/
- HAZUSE 止め時・狙い目: https://hazuse.com/machine/pachislot/6S1325/genre/205/
- 一撃 天井・設定変更: https://1geki.jp/slot/s_eva_syori/3/
- 一撃 機種トップ: https://1geki.jp/slot/s_eva_syori/
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/30833/
- 期待値見える化: https://slotjin.com/zone/eva-shouri/
- K-Navi: https://p-kn.com/slot/2727/
- Pachinavi: https://pachinavi.net/machines/eva-shouri-e-negai/

### 境界監査 / 次候補
- 2-9伝説 2017導入一覧: https://29den.com/newslot/
- K-Navi 2017年2月カレンダー: https://p-kn.com/calendar/201702/
- マジンガーZ ちょんぼりすた: https://chonborista.com/slot/newgin-slot/30654/
- マジンガーZ すろぱちくえすと: https://www.slopachi-quest.com/article/mazingerz-majin/
- マジンガーZ CrankySeven: https://crankyseven.com/mazingerz-pc.htm
- マジンガーZ Pachinavi: https://pachinavi.net/machines/mazinger-z/
